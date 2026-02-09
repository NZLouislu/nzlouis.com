"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { Group, Mesh, Vector3, DoubleSide, QuadraticBezierCurve3 } from "three";

/**
 * The Central Sun Node
 */
function SunNode({ scale = 1 }: { scale?: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Mean solar rotation velocity
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.1 * scale, 32, 32]} />
            <meshStandardMaterial
                color="#fbbf24"
                emissive="#f59e0b"
                emissiveIntensity={2}
                toneMapped={false}
            />
        </mesh>
    );
}

/**
 * Sunshade component at L1
 * Dynamically tracks the Earth-Sun line
 */
function Sunshade({ earthPos, scale = 1 }: { earthPos: Vector3, scale?: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current && earthPos.length() > 0) {
            const targetPos = earthPos.clone().multiplyScalar(0.72);
            meshRef.current.position.copy(targetPos);
            meshRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <mesh ref={meshRef}>
            <circleGeometry args={[0.45 * scale, 32]} />
            <meshStandardMaterial
                color="#fbbf24"
                metalness={1}
                roughness={0.1}
                transparent
                opacity={0.6}
                side={DoubleSide}
            />
        </mesh>
    );
}

/**
 * Advanced Interplanetary Starship
 * Uses Hohmann Transfer logic (Simplified for visualization)
 */
function InterplanetaryStarship({
    fromPosRef,
    toPosRef,
    trigger,
    scale = 1,
    color = "#e2e8f0"
}: {
    fromPosRef: React.MutableRefObject<Vector3>,
    toPosRef: React.MutableRefObject<Vector3>,
    trigger: boolean,
    scale?: number,
    color?: string
}) {
    const groupRef = useRef<Group>(null);
    const [missionState, setMissionState] = useState<'IDLE' | 'TRANSIT' | 'COOLDOWN'>('IDLE');
    const [progress, setProgress] = useState(0);

    const startPos = useRef(new Vector3());
    const endPos = useRef(new Vector3());
    const controlPoint = useRef(new Vector3());

    useFrame((state, delta) => {
        if (missionState === 'IDLE') {
            if (groupRef.current) {
                groupRef.current.position.copy(fromPosRef.current);
                groupRef.current.visible = false;
            }
            if (trigger) {
                startPos.current.copy(fromPosRef.current);
                endPos.current.copy(toPosRef.current);

                // Efficient Trajectory: A subtler arc that avoids the Sun
                // without creating a huge detour.
                const mid = new Vector3().addVectors(startPos.current, endPos.current).multiplyScalar(0.5);

                // Push control point out just enough to clear the Sun (approx 2 units)
                // plus a bit of height for the 'Artemis jump' look
                controlPoint.current.copy(mid).normalize().multiplyScalar(mid.length() + 2 * scale).add(new Vector3(0, 1.5 * scale, 0));

                setMissionState('TRANSIT');
                setProgress(0);
            }
        } else if (missionState === 'TRANSIT') {
            if (groupRef.current) {
                groupRef.current.visible = true;

                // Slightly faster transit (6s instead of 8s) for more 'action'
                const newProgress = Math.min(progress + delta / 6, 1);
                setProgress(newProgress);

                // Target moves while we are in transit!
                endPos.current.copy(toPosRef.current);

                const curve = new QuadraticBezierCurve3(startPos.current, controlPoint.current, endPos.current);
                const pos = curve.getPoint(newProgress);
                groupRef.current.position.copy(pos);

                // Align ship nose to flight path
                const nextPos = curve.getPoint(Math.min(newProgress + 0.01, 1));
                groupRef.current.lookAt(nextPos);

                if (newProgress >= 1) {
                    setMissionState('COOLDOWN');
                    setTimeout(() => setMissionState('IDLE'), 2500); // Shorter pause
                }
            }
        } else {
            if (groupRef.current) {
                groupRef.current.position.copy(toPosRef.current);
                groupRef.current.visible = false;
            }
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.04 * scale, 0.04 * scale, 0.25 * scale, 12]} />
                    <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
                </mesh>
                <pointLight color="#fb923c" intensity={2} distance={1.5} />
            </Float>
        </group>
    );
}

/**
 * Standardized Planet Component
 */
function Planet({
    radius,
    distance,
    speed,
    color,
    onUpdate,
    hasMoon = false
}: {
    radius: number,
    distance: number,
    speed: number,
    color: string,
    onUpdate?: (pos: Vector3) => void,
    hasMoon?: boolean
}) {
    const pivotRef = useRef<Group>(null);
    const meshRef = useRef<Mesh>(null);
    const moonPivotRef = useRef<Group>(null);
    const pos = new Vector3();

    useFrame((state, delta) => {
        if (pivotRef.current) {
            pivotRef.current.rotation.y += delta * speed;
        }
        if (meshRef.current && onUpdate) {
            meshRef.current.getWorldPosition(pos);
            onUpdate(pos.clone());
        }
        if (moonPivotRef.current) {
            moonPivotRef.current.rotation.y += delta * 1.5;
        }
    });

    return (
        <group ref={pivotRef}>
            <group position={[distance, 0, 0]}>
                <mesh ref={meshRef}>
                    <sphereGeometry args={[radius, 32, 32]} />
                    <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
                </mesh>

                {hasMoon && (
                    <group ref={moonPivotRef}>
                        <mesh position={[radius + 0.5, 0, 0]}>
                            <sphereGeometry args={[radius * 0.25, 16, 16]} />
                            <meshStandardMaterial color="#94a3b8" />
                        </mesh>
                    </group>
                )}
            </group>

            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
                <meshBasicMaterial color={color} opacity={0.1} transparent side={DoubleSide} />
            </mesh>
        </group>
    );
}

/**
 * Scientific Simulation Controller
 */
function SimulationController({
    earthPos,
    marsPos,
    mobileScale
}: {
    earthPos: React.MutableRefObject<Vector3>,
    marsPos: React.MutableRefObject<Vector3>,
    mobileScale: number
}) {
    const [earthToMarsTrigger, setEarthToMarsTrigger] = useState(false);
    const [marsToEarthTrigger, setMarsToEarthTrigger] = useState(false);
    const lastE2MLaunch = useRef(0);
    const lastM2ELaunch = useRef(0);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const angleEarth = Math.atan2(earthPos.current.z, earthPos.current.x);
        const angleMars = Math.atan2(marsPos.current.z, marsPos.current.x);

        // Relative phase angles for Hohmann Transfer
        let phaseDiff = angleMars - angleEarth;
        while (phaseDiff < 0) phaseDiff += 2 * Math.PI;
        while (phaseDiff > 2 * Math.PI) phaseDiff -= 2 * Math.PI;

        // Launch Window A: Earth -> Mars
        // Optimal: Mars leads Earth by ~45 degrees (0.78 rad)
        const isE2MWindow = Math.abs(phaseDiff - 0.78) < 0.2;
        if (isE2MWindow && time - lastE2MLaunch.current > 25) {
            setEarthToMarsTrigger(true);
            lastE2MLaunch.current = time;
            setTimeout(() => setEarthToMarsTrigger(false), 200);
        }

        // Launch Window B: Mars -> Earth 
        // Optimal: Earth behind Mars by ~75 degrees (Simplified)
        const isM2EWindow = Math.abs(phaseDiff - (2 * Math.PI - 1.3)) < 0.2;
        if (isM2EWindow && time - lastM2ELaunch.current > 25) {
            setMarsToEarthTrigger(true);
            lastM2ELaunch.current = time;
            setTimeout(() => setMarsToEarthTrigger(false), 200);
        }
    });

    return (
        <>
            <Sunshade earthPos={earthPos.current} scale={mobileScale} />
            <InterplanetaryStarship fromPosRef={earthPos} toPosRef={marsPos} trigger={earthToMarsTrigger} scale={mobileScale} color="#ffffff" />
            <InterplanetaryStarship fromPosRef={marsPos} toPosRef={earthPos} trigger={marsToEarthTrigger} scale={mobileScale} color="#cbd5e1" />
        </>
    );
}

export default function FutureSolarScene() {
    const [isMobile, setIsMobile] = useState(false);
    const earthPos = useRef(new Vector3());
    const marsPos = useRef(new Vector3());

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const containerHeight = isMobile ? '500px' : '750px';
    const cameraFov = isMobile ? 80 : 38;
    const mobileScale = isMobile ? 0.8 : 1.0;

    return (
        <div style={{
            width: '100%',
            height: containerHeight,
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '32px',
            border: '1px solid rgba(0,0,0,0.05)',
            marginTop: '2rem',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'absolute', top: '32px', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none', zIndex: 1, padding: '0 20px' }}>
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#1e293b' }}>Interplanetary Future</h3>
                <p style={{ margin: '6px 0 0', fontSize: '0.9rem', color: '#64748b' }}>
                    Scientific Hohmann Transfer Logic. Earth Protection via L1 Sunshade.
                </p>
            </div>

            <Canvas
                camera={{ position: [0, 10, 20], fov: cameraFov, near: 0.1, far: 1000 }}
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[0, 0, 0]} intensity={4} color="#fbbf24" distance={30} decay={2} />

                <SunNode scale={mobileScale * 1.1} />

                <Planet
                    radius={0.4 * mobileScale}
                    distance={5.0 * mobileScale}
                    speed={0.3}
                    color="#2563eb"
                    hasMoon={true}
                    onUpdate={(p) => earthPos.current.copy(p)}
                />

                <Planet
                    radius={0.3 * mobileScale}
                    distance={8.0 * mobileScale}
                    speed={0.2}
                    color="#dc2626"
                    onUpdate={(p) => marsPos.current.copy(p)}
                />

                <SimulationController earthPos={earthPos} marsPos={marsPos} mobileScale={mobileScale} />

                <Stars radius={120} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
