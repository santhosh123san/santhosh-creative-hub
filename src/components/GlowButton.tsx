import { ReactNode, ButtonHTMLAttributes } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green';
}

const GlowButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  glowColor = 'cyan',
  className = '',
  ...props 
}: GlowButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const glowStyles = {
    cyan: {
      bg: 'bg-gradient-to-r from-neon-cyan to-primary',
      shadow: 'shadow-[0_0_20px_hsl(180_100%_50%/0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_hsl(180_100%_50%/0.7)]',
      border: 'border-neon-cyan/50',
    },
    purple: {
      bg: 'bg-gradient-to-r from-neon-purple to-secondary',
      shadow: 'shadow-[0_0_20px_hsl(280_100%_60%/0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_hsl(280_100%_60%/0.7)]',
      border: 'border-neon-purple/50',
    },
    pink: {
      bg: 'bg-gradient-to-r from-neon-pink to-accent',
      shadow: 'shadow-[0_0_20px_hsl(320_100%_60%/0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_hsl(320_100%_60%/0.7)]',
      border: 'border-neon-pink/50',
    },
    green: {
      bg: 'bg-gradient-to-r from-neon-green to-primary',
      shadow: 'shadow-[0_0_20px_hsl(145_100%_50%/0.5)]',
      hoverShadow: 'hover:shadow-[0_0_30px_hsl(145_100%_50%/0.7)]',
      border: 'border-neon-green/50',
    },
  };

  const variantClasses = {
    primary: `${glowStyles[glowColor].bg} text-background font-semibold ${glowStyles[glowColor].shadow} ${glowStyles[glowColor].hoverShadow}`,
    secondary: `bg-muted text-foreground border ${glowStyles[glowColor].border} hover:bg-muted/80`,
    outline: `bg-transparent border-2 ${glowStyles[glowColor].border} text-foreground hover:bg-muted/30 ${glowStyles[glowColor].shadow}`,
  };

  return (
    <button
      className={`
        relative inline-flex items-center justify-center gap-2 rounded-lg font-medium
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Animated border gradient */}
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default GlowButton;