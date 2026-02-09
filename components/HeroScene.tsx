"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Group, Mesh } from "three";

/**
 * The Central Star (Source of Energy)
 */
function SunNode({ scale = 1 }: { scale?: number }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Sun's differential rotation (simplified to a single mean angular velocity)
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
            <pointLight intensity={3} distance={20 * scale} decay={2} color="#fbbf24" />
        </mesh>
    );
}

/**
 * The Dyson Structure (Technological Shell)
 */
/**
 * The Dyson Structure (Technological Shell)
 * Consisting of a Swarm (Collectors) and a Transmission Grid.
 */
function DysonShell({ scale = 1 }: { scale?: number }) {
    const outerRef = useRef<Mesh>(null);
    const swarmRef = useRef<Mesh>(null);
    const beamRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (outerRef.current) {
            outerRef.current.rotation.y += delta * 0.02;
            outerRef.current.rotation.z += delta * 0.01;
        }
        if (swarmRef.current) {
            swarmRef.current.rotation.y -= delta * 0.05;
        }
        if (beamRef.current) {
            beamRef.current.rotation.x += delta * 0.2;
            beamRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            {/* 1. Outer Geodesic Frame - The Construction Scaffolding */}
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[2.0 * scale, 1]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    emissive="#1e3a8a"
                    emissiveIntensity={0.5}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* 2. Equatorial Ring: The Solar Collector Swarm (Energy Intake) */}
            <mesh ref={swarmRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.4 * scale, 0.02 * scale, 16, 100]} />
                <meshStandardMaterial
                    color="#fbbf24"
                    emissive="#fbbf24"
                    emissiveIntensity={0.8}
                />
            </mesh>

            {/* 3. Inclined Ring: The Power Transmission Field (Energy Output) */}
            <mesh ref={beamRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[1.7 * scale, 0.01 * scale, 16, 100]} />
                <meshStandardMaterial
                    color="#60a5fa"
                    emissive="#3b82f6"
                    emissiveIntensity={2}
                />
            </mesh>
        </group>
    );
}

/**
 * A Planet that orbits the center, effectively replacing the cubes.
 */
function Planet({
    radius,
    distance,
    speed,
    color,
    children
}: {
    radius: number,
    distance: number,
    speed: number,
    color: string,
    children?: React.ReactNode
}) {
    const pivotRef = useRef<Group>(null);
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (pivotRef.current) {
            pivotRef.current.rotation.y += delta * speed;
        }
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5; // Self-rotation
        }
    });

    return (
        <group ref={pivotRef}>
            <group position={[distance, 0, 0]}>
                {/* Planet Body */}
                <mesh ref={meshRef}>
                    <sphereGeometry args={[radius, 32, 32]} />
                    <meshStandardMaterial
                        color={color}
                        roughness={0.7}
                        metalness={0.2}
                    />
                </mesh>

                {/* Moon System attached to the planet location */}
                {children}
            </group>

            {/* Orbit trail */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
                <meshBasicMaterial color={color} opacity={0.15} transparent side={2} />
            </mesh>
        </group>
    );
}

/**
 * A Moon that orbits its parent container (the planet).
 */
function Moon({
    radius = 0.08,
    distance = 0.6,
    speed = 2
}: {
    radius?: number,
    distance?: number,
    speed?: number
}) {
    const pivotRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if (pivotRef.current) {
            pivotRef.current.rotation.y += delta * speed;
        }
    });

    return (
        <group ref={pivotRef}>
            <mesh position={[distance, 0, 0]}>
                <sphereGeometry args={[radius, 16, 16]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
        </group>
    )
}

export default function HeroScene() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const containerHeight = isMobile ? '500px' : '800px';
    const cameraFov = isMobile ? 90 : 35;
    const mobileScale = isMobile ? 0.85 : 1.0;

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
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: '#1e293b' }}>Modern Dyson Swarm</h3>
                <p style={{ margin: '6px 0 0', fontSize: '0.9rem', color: '#64748b' }}>
                    Hyper-scale energy infrastructure for a Type II Civilization.
                </p>
            </div>

            <Canvas
                camera={{ position: [0, 9, 15], fov: cameraFov, near: 0.1, far: 1000 }}
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[0, 0, 0]} intensity={3} color="#fbbf24" distance={25} decay={2} />

                {/* The Solar System Core with Dyson Structure */}
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
                    <SunNode scale={mobileScale * 1.1} />
                    <DysonShell scale={mobileScale * 1.1} />
                </Float>

                {/* Earth System: Deep Ocean Blue + Moon */}
                <Planet distance={5.0 * mobileScale} speed={0.3} radius={0.4 * mobileScale} color="#1d4ed8">
                    <Moon distance={0.75 * mobileScale} speed={1.5} radius={0.1 * mobileScale} />
                </Planet>

                {/* Mars System: Rusty Red Planet */}
                <Planet distance={8.0 * mobileScale} speed={0.2} radius={0.3 * mobileScale} color="#c2410c" />

                {/* Background Stars */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
