'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Wheel({ position, scale = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 3;
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={ref} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Tire rim */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.26, 8]} />
        <meshStandardMaterial color="#404060" roughness={0.2} metalness={1} />
      </mesh>
    </group>
  );
}

function TruckBody() {
  const groupRef = useRef();
  const glowRef = useRef();
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time.current * 0.8) * 0.05;
    }
    if (glowRef.current) {
      glowRef.current.material.emissiveIntensity = 0.5 + Math.sin(time.current * 2) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.2}>
        {/* Cargo container */}
        <mesh position={[-0.3, 0.7, 0]}>
          <boxGeometry args={[3.2, 1.6, 1.6]} />
          <meshStandardMaterial
            color="#0d1b2a"
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>

        {/* Cargo accent stripe */}
        <mesh position={[-0.3, 0.7, 0.81]} ref={glowRef}>
          <boxGeometry args={[3.0, 0.08, 0.01]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.8}
            toneMapped={false}
          />
        </mesh>

        {/* Second stripe */}
        <mesh position={[-0.3, 0.35, 0.81]}>
          <boxGeometry args={[3.0, 0.04, 0.01]} />
          <meshStandardMaterial
            color="#7b61ff"
            emissive="#7b61ff"
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </mesh>

        {/* Cabin */}
        <mesh position={[1.9, 0.5, 0]}>
          <boxGeometry args={[1.2, 1.2, 1.5]} />
          <meshStandardMaterial
            color="#0a1628"
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Windshield */}
        <mesh position={[2.51, 0.65, 0]}>
          <boxGeometry args={[0.02, 0.7, 1.2]} />
          <meshStandardMaterial
            color="#1a3a5c"
            roughness={0.05}
            metalness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Headlights */}
        <mesh position={[2.52, 0.25, 0.5]}>
          <boxGeometry args={[0.02, 0.15, 0.25]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[2.52, 0.25, -0.5]}>
          <boxGeometry args={[0.02, 0.15, 0.25]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>

        {/* Tail lights */}
        <mesh position={[-1.91, 0.25, 0.5]}>
          <boxGeometry args={[0.02, 0.12, 0.2]} />
          <meshStandardMaterial
            color="#ff3366"
            emissive="#ff3366"
            emissiveIntensity={1.5}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[-1.91, 0.25, -0.5]}>
          <boxGeometry args={[0.02, 0.12, 0.2]} />
          <meshStandardMaterial
            color="#ff3366"
            emissive="#ff3366"
            emissiveIntensity={1.5}
            toneMapped={false}
          />
        </mesh>

        {/* Chassis */}
        <mesh position={[0.5, -0.15, 0]}>
          <boxGeometry args={[4.5, 0.15, 1.2]} />
          <meshStandardMaterial color="#0a0a18" roughness={0.3} metalness={0.9} />
        </mesh>

        {/* Wheels */}
        <Wheel position={[1.7, -0.35, 0.75]} />
        <Wheel position={[1.7, -0.35, -0.75]} />
        <Wheel position={[-0.8, -0.35, 0.75]} />
        <Wheel position={[-0.8, -0.35, -0.75]} />
        <Wheel position={[-1.3, -0.35, 0.75]} />
        <Wheel position={[-1.3, -0.35, -0.75]} />

        {/* Ground reflection (subtle) */}
        <mesh position={[0.5, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6, 3]} />
          <meshStandardMaterial
            color="#050510"
            transparent
            opacity={0.3}
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingBoxes() {
  const boxesRef = useRef([]);
  const positions = useMemo(() => [
    [-3.5, 1.5, -1],
    [-3.8, 0.8, 0.5],
    [-3.2, 2.2, -0.5],
    [3.5, 1.8, -0.8],
    [3.8, 1.0, 0.3],
  ], []);

  useFrame((state) => {
    boxesRef.current.forEach((box, i) => {
      if (box) {
        box.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
        box.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.3;
        box.position.y = positions[i][1] + Math.sin(state.clock.elapsedTime * 0.7 + i * 2) * 0.2;
      }
    });
  });

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          position={pos}
          scale={0.3 + i * 0.05}
        >
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#1a1a35' : '#0d1b2a'}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

export default function TruckScene() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 1,
    }}>
      <Canvas
        camera={{ position: [5, 2, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        <directionalLight position={[-3, 2, -2]} intensity={0.2} color="#00d4ff" />
        <pointLight position={[3, 0, 2]} intensity={0.5} color="#00d4ff" distance={8} />
        <pointLight position={[-2, 1, -1]} intensity={0.3} color="#7b61ff" distance={6} />

        <group rotation={[0, -0.4, 0]} position={[0, -0.3, 0]}>
          <TruckBody />
          <FloatingBoxes />
        </group>

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
