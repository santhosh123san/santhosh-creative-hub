import { ReactNode } from 'react';

interface NeonBadgeProps {
  children: ReactNode;
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange';
  className?: string;
  animated?: boolean;
}

const colorClasses = {
  cyan: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 shadow-[0_0_15px_hsl(180_100%_50%/0.3)]',
  purple: 'bg-neon-purple/10 text-neon-purple border-neon-purple/30 shadow-[0_0_15px_hsl(280_100%_60%/0.3)]',
  pink: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30 shadow-[0_0_15px_hsl(320_100%_60%/0.3)]',
  green: 'bg-neon-green/10 text-neon-green border-neon-green/30 shadow-[0_0_15px_hsl(145_100%_50%/0.3)]',
  orange: 'bg-neon-orange/10 text-neon-orange border-neon-orange/30 shadow-[0_0_15px_hsl(25_100%_55%/0.3)]',
};

const NeonBadge = ({ 
  children, 
  color = 'cyan', 
  className = '',
  animated = false 
}: NeonBadgeProps) => {
  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
        ${colorClasses[color]}
        ${animated ? 'animate-neon-pulse' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default NeonBadge;