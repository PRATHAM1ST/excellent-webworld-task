import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function InterectiveObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;

      if (hovered) {
        meshRef.current.scale.x += meshRef.current.scale.x > 1.5 ? 0 : 0.01;
        meshRef.current.scale.y += meshRef.current.scale.y > 1.5 ? 0 : 0.01;
        meshRef.current.scale.z += meshRef.current.scale.z > 1.5 ? 0 : 0.01;
      } else {
        meshRef.current.scale.x -= meshRef.current.scale.x < 1 ? 0 : 0.01;
        meshRef.current.scale.y -= meshRef.current.scale.y < 1 ? 0 : 0.01;
        meshRef.current.scale.z -= meshRef.current.scale.z < 1 ? 0 : 0.01;
      }
    }
    return () => {
      if (meshRef.current) {
        meshRef.current.rotation.x -= delta;
        meshRef.current.rotation.y -= delta;
      }
    };
  });
  return (
    <mesh ref={meshRef} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={hovered ? '#F5E7C6' : '#FA8112'} metalness={0.5} roughness={0.5} />
    </mesh>
  );
}

export default function ThreeD() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-[#FAF3E1] py-20 px-4 md:py-24">
      <div className="mb-16 md:mb-20 text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222222] mb-6">Interactive 3D Cube</h2>
        <p className="text-lg md:text-xl text-[#222222]/80 leading-relaxed">
          Hover over the cube to see it grow and change color. Use your mouse to rotate and explore the 3D space.
        </p>
      </div>
      <Suspense fallback={<div className="text-[#222222] text-lg">Loading 3D scene...</div>}>
        <Canvas className="w-full h-full aspect-square max-h-[500px] max-w-[500px] md:max-h-[600px] md:max-w-[600px] bg-[#F5E7C6] rounded-2xl shadow-2xl border-2 border-[#FA8112]">
          <OrbitControls makeDefault />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <InterectiveObject />
        </Canvas>
      </Suspense>
    </div>
  );
}
