import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  mousePosition: { x: number; y: number };
  type: 'sphere' | 'box' | 'torus';
  color: string;
  speed: number;
}

const FloatingShape = ({ position, mousePosition, type, color, speed }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Mouse influence on rotation and position
      const mouseInfluence = 0.1;
      const time = state.clock.getElapsedTime() * speed;
      
      // Base rotation
      meshRef.current.rotation.x = time;
      meshRef.current.rotation.y = time * 0.7;
      
      // Mouse influence on position
      meshRef.current.position.x = position[0] + mousePosition.x * mouseInfluence;
      meshRef.current.position.y = position[1] + mousePosition.y * mouseInfluence;
      
      // Floating animation
      meshRef.current.position.z = position[2] + Math.sin(time) * 0.2;
      
      // Scale animation on hover
      const targetScale = hover ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const ShapeComponent = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[0.5]} />;
      case 'box':
        return <Box args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <Torus args={[0.6, 0.2, 8, 16]} />;
      default:
        return <Sphere args={[0.5]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <ShapeComponent />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Scene = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const shapes = [
    { position: [-3, 2, -2], type: 'sphere', color: '#6366f1', speed: 0.5 },
    { position: [3, -1, -3], type: 'box', color: '#8b5cf6', speed: 0.7 },
    { position: [-2, -2, -1], type: 'torus', color: '#06b6d4', speed: 0.6 },
    { position: [2, 2, -4], type: 'sphere', color: '#ec4899', speed: 0.8 },
    { position: [0, 0, -5], type: 'box', color: '#10b981', speed: 0.4 },
    { position: [-4, 0, -3], type: 'torus', color: '#f59e0b', speed: 0.9 },
  ] as const;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
      
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position as [number, number, number]}
          mousePosition={mousePosition}
          type={shape.type}
          color={shape.color}
          speed={shape.speed}
        />
      ))}
    </>
  );
};

const Hero3DBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;