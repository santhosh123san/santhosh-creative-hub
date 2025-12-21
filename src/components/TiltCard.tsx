import { useState, useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange';
  intensity?: number;
}

const glowColors = {
  cyan: 'hsl(180 100% 50%)',
  purple: 'hsl(280 100% 60%)',
  pink: 'hsl(320 100% 60%)',
  green: 'hsl(145 100% 50%)',
  orange: 'hsl(25 100% 55%)',
};

const TiltCard = ({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  intensity = 15 
}: TiltCardProps) => {
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect that follows cursor */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColors[glowColor]}40 0%, transparent 60%)`,
        }}
      />
      
      {/* Border glow */}
      <div 
        className="absolute -inset-[1px] rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${glowColors[glowColor]}60, transparent, ${glowColors[glowColor]}60)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;