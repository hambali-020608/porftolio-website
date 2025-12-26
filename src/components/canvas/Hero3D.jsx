import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";

const Computer = () => {
    const computer = useGLTF("/desktop-port2-compressed.glb");
    const meshRef = useRef();

    useFrame((state) => {
        // Animation: Smoothly interpret scale from 0 to 0.5
        const targetScale = 0.5;
        // Optimization: stop calculating if close enough
        if (meshRef.current) {
            const currentScale = meshRef.current.scale.x;
            if (Math.abs(currentScale - targetScale) > 0.001) {
                const lerpedValue = THREE.MathUtils.lerp(
                    currentScale,
                    targetScale,
                    0.1
                );
                meshRef.current.scale.set(lerpedValue, lerpedValue, lerpedValue);
            }
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={computer.scene}
            scale={0.01} // Initial small scale
            position={[0, -1, 0]}
            rotation={[0, 1, 0]}
        />
    );
};

const Hero3D = () => {
    return (
        <Canvas

            // shadows removed for performance
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: false }}
            className="w-full h-full z-10"
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
                <ambientLight intensity={1.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.5}
                    intensity={2}
                // castShadow removed
                />
                <pointLight position={[-10, 5, -10]} intensity={1} />

                <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                    <Computer />
                </Float>
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default Hero3D;
