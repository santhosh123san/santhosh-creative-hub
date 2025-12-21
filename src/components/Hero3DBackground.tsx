import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  mousePosition: { x: number; y: number };
  type: 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron';
  color: string;
  emissiveColor: string;
  speed: number;
  scale?: number;
}

const FloatingShape = ({ position, mousePosition, type, color, emissiveColor, speed, scale = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const mouseInfluence = 0.15;
      const time = state.clock.getElapsedTime() * speed;
      
      // Enhanced rotation
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = time * 0.2;
      
      // Mouse influence on position
      meshRef.current.position.x = position[0] + mousePosition.x * mouseInfluence * 2;
      meshRef.current.position.y = position[1] + mousePosition.y * mouseInfluence * 2;
      
      // Floating animation with more depth
      meshRef.current.position.z = position[2] + Math.sin(time * 0.5) * 0.5;
      
      // Scale animation on hover
      const targetScale = hover ? scale * 1.3 : scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const ShapeComponent = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[0.5, 32, 32]} />;
      case 'box':
        return <Box args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <Torus args={[0.6, 0.2, 16, 32]} />;
      case 'octahedron':
        return <Octahedron args={[0.6]} />;
      case 'icosahedron':
        return <Icosahedron args={[0.5]} />;
      default:
        return <Sphere args={[0.5, 32, 32]} />;
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
        opacity={0.6}
        emissive={emissiveColor}
        emissiveIntensity={hover ? 0.8 : 0.4}
        metalness={0.8}
        roughness={0.2}
        wireframe={type === 'icosahedron' || type === 'octahedron'}
      />
    </mesh>
  );
};

// Particle system for background stars
const Particles = ({ count = 200 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  const particlesPosition = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Glowing ring effect
const GlowRing = ({ radius, color }: { radius: number; color: string }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -3]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};

const Scene = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const shapes = [
    // Neon Cyan shapes
    { position: [-4, 2.5, -3], type: 'sphere', color: '#00ffff', emissiveColor: '#00ffff', speed: 0.4, scale: 1.2 },
    { position: [4.5, -1.5, -4], type: 'octahedron', color: '#00ffff', emissiveColor: '#00ffff', speed: 0.5, scale: 0.8 },
    
    // Neon Purple shapes
    { position: [-3, -2, -2], type: 'torus', color: '#a855f7', emissiveColor: '#a855f7', speed: 0.6, scale: 1 },
    { position: [3, 2.5, -5], type: 'icosahedron', color: '#a855f7', emissiveColor: '#a855f7', speed: 0.3, scale: 1.1 },
    
    // Neon Pink shapes
    { position: [0, 3, -6], type: 'box', color: '#ec4899', emissiveColor: '#ec4899', speed: 0.45, scale: 0.9 },
    { position: [-5, 0, -4], type: 'sphere', color: '#ec4899', emissiveColor: '#ec4899', speed: 0.55, scale: 0.7 },
    
    // Neon Green shapes
    { position: [5, 0.5, -3], type: 'torus', color: '#10b981', emissiveColor: '#10b981', speed: 0.7, scale: 0.8 },
    { position: [-2, -3, -5], type: 'octahedron', color: '#10b981', emissiveColor: '#10b981', speed: 0.35, scale: 1 },
    
    // Additional shapes for depth
    { position: [2, -2.5, -7], type: 'icosahedron', color: '#f59e0b', emissiveColor: '#f59e0b', speed: 0.5, scale: 0.6 },
    { position: [-4, 1, -6], type: 'box', color: '#06b6d4', emissiveColor: '#06b6d4', speed: 0.4, scale: 0.7 },
  ] as const;

  return (
    <>
      {/* Ambient lighting with color */}
      <ambientLight intensity={0.2} color="#0a0a1a" />
      
      {/* Primary neon point lights */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" distance={30} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" distance={25} />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#ec4899" distance={20} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#10b981" distance={20} />
      
      {/* Spotlight for dramatic effect */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#00ffff"
      />
      
      {/* Particle stars */}
      <Particles count={300} />
      
      {/* Glowing rings */}
      <GlowRing radius={4} color="#00ffff" />
      <GlowRing radius={5.5} color="#a855f7" />
      <GlowRing radius={7} color="#ec4899" />
      
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position as [number, number, number]}
          mousePosition={mousePosition}
          type={shape.type}
          color={shape.color}
          emissiveColor={shape.emissiveColor}
          speed={shape.speed}
          scale={shape.scale}
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
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;