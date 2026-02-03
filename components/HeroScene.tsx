"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Group, Mesh } from "three";

/**
 * The Central Star (Source of Energy)
 */
function SunNode() {
    return (
        <mesh>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial
                color="#fbbf24" // Amber-400
                emissive="#f59e0b" // Amber-500
                emissiveIntensity={2}
                toneMapped={false}
            />
            <pointLight intensity={3} distance={15} decay={2} color="#fbbf24" />
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
function DysonShell() {
    const outerRef = useRef<Mesh>(null);
    const swarmRef = useRef<Mesh>(null);
    const beamRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (outerRef.current) {
            outerRef.current.rotation.y += delta * 0.02;
            outerRef.current.rotation.z += delta * 0.01;
        }
        if (swarmRef.current) {
            // The main collector swarm rotates with the star
            swarmRef.current.rotation.y -= delta * 0.05;
        }
        if (beamRef.current) {
            // The transmission ring rotates on a different axis to scan/beam energy
            beamRef.current.rotation.x += delta * 0.2;
            beamRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            {/* 1. Outer Geodesic Frame - The Construction Scaffolding */}
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[2.2, 1]} />
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
                {/* A flattened ring/band representing millions of satellites */}
                <torusGeometry args={[1.5, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#fbbf24" // Solar panel gold/amber
                    emissive="#fbbf24"
                    emissiveIntensity={0.8}
                />
            </mesh>

            {/* 3. Inclined Ring: The Power Transmission Field (Energy Output) */}
            <mesh ref={beamRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                {/* A thin, glowing plasma beam ring */}
                <torusGeometry args={[1.7, 0.01, 16, 100]} />
                <meshStandardMaterial
                    color="#60a5fa" // Energy Blue
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
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 2, 9], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#fbbf24" distance={20} decay={2} />

                {/* The Solar System Core with Dyson Structure */}
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
                    <SunNode />
                    <DysonShell />
                </Float>

                {/* Earth System: Deep Ocean Blue + Moon */}
                <Planet distance={4.2} speed={0.3} radius={0.35} color="#1d4ed8">
                    <Moon distance={0.7} speed={1.5} radius={0.1} />
                </Planet>

                {/* Mars System: Rusty Red Planet */}
                <Planet distance={6.0} speed={0.2} radius={0.28} color="#c2410c" />

                {/* Background Stars */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
