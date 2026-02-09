"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { Group, Mesh, Vector3, DoubleSide, QuadraticBezierCurve3 } from "three";

interface SunNodeProps {
    scale?: number;
}

function SunNode({ scale = 1 }: SunNodeProps) {
    const meshRef = useRef<Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
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

interface SunshadeProps {
    earthPos: Vector3;
    scale?: number;
}

function Sunshade({ earthPos, scale = 1 }: SunshadeProps) {
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
            <circleGeometry args={[0.4 * scale, 32]} />
            <meshStandardMaterial
                color="#334155"
                emissive="#94a3b8"
                emissiveIntensity={0.2}
                metalness={1}
                roughness={0.2}
                transparent
                opacity={0.5}
                side={DoubleSide}
            />
        </mesh>
    );
}

interface StarshipProps {
    fromPosRef: React.MutableRefObject<Vector3>;
    toPosRef: React.MutableRefObject<Vector3>;
    trigger: boolean;
    scale?: number;
    color?: string;
}

function InterplanetaryStarship({
    fromPosRef,
    toPosRef,
    trigger,
    scale = 1,
    color = "#e2e8f0"
}: StarshipProps) {
    const groupRef = useRef<Group>(null);
    const [missionState, setMissionState] = useState<'IDLE' | 'TRANSIT' | 'COOLDOWN'>('IDLE');
    const [progress, setProgress] = useState(0);
    const transitDuration = 5.0;

    const startPos = useRef(new Vector3());
    const controlPoint = useRef(new Vector3());

    useFrame((state, delta) => {
        if (missionState === 'IDLE') {
            if (groupRef.current) {
                groupRef.current.position.copy(fromPosRef.current);
                groupRef.current.visible = false;
            }
            if (trigger) {
                startPos.current.copy(fromPosRef.current);
                const angleStart = Math.atan2(startPos.current.z, startPos.current.x);
                const angleEnd = Math.atan2(toPosRef.current.z, toPosRef.current.x);
                let diff = angleEnd - angleStart;
                while (diff < -Math.PI) diff += 2 * Math.PI;
                while (diff > Math.PI) diff -= 2 * Math.PI;
                const midAngle = angleStart + diff * 0.5;

                const maxRadius = Math.max(startPos.current.length(), 8.0 * scale);
                const apexRadius = maxRadius + 3.0 * scale;

                controlPoint.current.set(
                    Math.cos(midAngle) * apexRadius,
                    2.0 * scale,
                    Math.sin(midAngle) * apexRadius
                );

                setMissionState('TRANSIT');
                setProgress(0);
            }
        } else if (missionState === 'TRANSIT') {
            if (groupRef.current) {
                groupRef.current.visible = true;
                const newProgress = Math.min(progress + delta / transitDuration, 1);
                setProgress(newProgress);

                const t = 1 - Math.pow(1 - newProgress, 2);
                const curve = new QuadraticBezierCurve3(startPos.current, controlPoint.current, toPosRef.current);
                const pos = curve.getPoint(t);
                groupRef.current.position.copy(pos);

                const nextPos = curve.getPoint(Math.min(t + 0.01, 1));
                groupRef.current.lookAt(nextPos);
                groupRef.current.rotateX(Math.PI / 2);

                if (newProgress >= 1) {
                    setMissionState('COOLDOWN');
                    setTimeout(() => setMissionState('IDLE'), 2500);
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
                <pointLight color="#fb923c" intensity={missionState === 'TRANSIT' ? 5 : 0} distance={2} />
            </Float>
        </group>
    );
}

interface PlanetProps {
    radius: number;
    distance: number;
    speed: number;
    color: string;
    onUpdate?: (pos: Vector3) => void;
    initialAngle?: number;
    hasMoon?: boolean;
}

function Planet({
    radius,
    distance,
    speed,
    color,
    onUpdate,
    initialAngle = 0,
    hasMoon = false
}: PlanetProps) {
    const pivotRef = useRef<Group>(null);
    const meshRef = useRef<Mesh>(null);
    const moonPivotRef = useRef<Group>(null);
    const pos = new Vector3();

    useEffect(() => {
        if (pivotRef.current) {
            pivotRef.current.rotation.y = initialAngle;
        }
    }, [initialAngle]);

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

interface StatusType {
    text: string;
    color: string;
}

interface ControllerProps {
    earthPos: React.MutableRefObject<Vector3>;
    marsPos: React.MutableRefObject<Vector3>;
    mobileScale: number;
    setMissionStatus: (status: StatusType) => void;
}

function SimulationController({
    earthPos,
    marsPos,
    mobileScale,
    setMissionStatus
}: ControllerProps) {
    const [earthToMarsTrigger, setEarthToMarsTrigger] = useState(false);
    const [marsToEarthTrigger, setMarsToEarthTrigger] = useState(false);
    const [isTransiting, setIsTransiting] = useState(false);
    const lastE2MLaunch = useRef(-100);
    const lastM2ELaunch = useRef(-100);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const angleEarth = Math.atan2(earthPos.current.z, earthPos.current.x);
        const angleMars = Math.atan2(marsPos.current.z, marsPos.current.x);

        let phaseDiff = angleMars - angleEarth;
        while (phaseDiff < 0) phaseDiff += 2 * Math.PI;
        while (phaseDiff > 2 * Math.PI) phaseDiff -= 2 * Math.PI;

        const isE2MWindow = Math.abs(phaseDiff - 0.78) < 0.2;
        const isM2EWindow = Math.abs(phaseDiff - (2 * Math.PI - 0.77)) < 0.2;

        if (isE2MWindow || isM2EWindow || isTransiting) {
            setMissionStatus({ text: "LAUNCH WINDOW OPEN", color: "#16a34a" });

            if (isE2MWindow && time - lastE2MLaunch.current > 15) {
                setEarthToMarsTrigger(true);
                setIsTransiting(true);
                lastE2MLaunch.current = time;
                setTimeout(() => { setEarthToMarsTrigger(false); setIsTransiting(false); }, 6000);
            } else if (isM2EWindow && time - lastM2ELaunch.current > 15) {
                setMarsToEarthTrigger(true);
                setIsTransiting(true);
                lastM2ELaunch.current = time;
                setTimeout(() => { setMarsToEarthTrigger(false); setIsTransiting(false); }, 6000);
            }
        } else {
            setMissionStatus({ text: "WAITING FOR WINDOW", color: "#dc2626" });
        }
    });

    return (
        <>
            <Sunshade earthPos={earthPos.current} scale={mobileScale} />
            <InterplanetaryStarship
                fromPosRef={earthPos}
                toPosRef={marsPos}
                trigger={earthToMarsTrigger}
                scale={mobileScale}
                color="#ffffff"
            />
            <InterplanetaryStarship
                fromPosRef={marsPos}
                toPosRef={earthPos}
                trigger={marsToEarthTrigger}
                scale={mobileScale}
                color="#94a3b8"
            />
        </>
    );
}

export default function FutureSolarScene() {
    const [isMobile, setIsMobile] = useState(false);
    const [missionStatus, setMissionStatus] = useState<StatusType>({ text: "INITIALIZING", color: "#64748b" });
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
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#1e293b' }}>Hohmann Transfer Orbit & Planetary Sunshade</h3>
                <p style={{ margin: '6px 0 0', fontSize: '0.9rem', color: '#64748b', maxWidth: '500px', marginInline: 'auto' }}>
                    Simulating SpaceX-inspired Starship fleets during optimal Hohmann windows.
                    Earth climate extension via L1 Lagrangian Sunshade.
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
                    initialAngle={0}
                    color="#2563eb"
                    hasMoon={true}
                    onUpdate={(p: Vector3) => earthPos.current.copy(p)}
                />
                <Planet
                    radius={0.3 * mobileScale}
                    distance={8.0 * mobileScale}
                    speed={0.2}
                    initialAngle={1.2}
                    color="#dc2626"
                    onUpdate={(p: Vector3) => marsPos.current.copy(p)}
                />
                <SimulationController
                    earthPos={earthPos}
                    marsPos={marsPos}
                    mobileScale={mobileScale}
                    setMissionStatus={setMissionStatus}
                />
                <Stars radius={120} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>

            <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '8px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '99px',
                border: '1px solid rgba(0,0,0,0.1)',
                color: missionStatus.color,
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'color 0.3s ease'
            }}>
                {missionStatus.text}
            </div>
        </div>
    );
}
