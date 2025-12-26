import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

const Computer = () => {
    const computer = useGLTF("/desktop-port2.glb");

    return (
        <primitive
            object={computer.scene}
            scale={0.5}
            position={[0, -1, 0]}
            rotation={[0, -0.2, 0]}
        />
    );
};

const Hero3D = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
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
                    penumbra={1}
                    intensity={2}
                    castShadow
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
