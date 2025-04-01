
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Hero = ({
  title,
  subtitle,
  children,
  backgroundImage,
  overlay = true,
  className,
  size = 'medium',
}: HeroProps) => {
  const sizeClasses = {
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-24',
    large: 'py-20 lg:py-32',
  };
  
  return (
    <section
      className={cn(
        'relative flex items-center',
        sizeClasses[size],
        className
      )}
      style={
        backgroundImage
          ? { 
              backgroundImage: `url(${backgroundImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }
          : {}
      }
    >
      {/* Overlay */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-denver-900/60" />
      )}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Title */}
          {typeof title === 'string' ? (
            <h1 className={cn(
              "mb-4 text-4xl md:text-5xl font-bold tracking-tight",
              backgroundImage ? "text-white" : "text-denver-900"
            )}>
              {title}
            </h1>
          ) : (
            title
          )}
          
          {/* Subtitle */}
          {subtitle && (typeof subtitle === 'string' ? (
            <p className={cn(
              "text-xl md:text-2xl mb-6",
              backgroundImage ? "text-white/90" : "text-denver-600"
            )}>
              {subtitle}
            </p>
          ) : (
            subtitle
          ))}
          
          {/* Any other content */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
