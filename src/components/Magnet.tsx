import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../utils/cn';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const updateBounds = () => {
      if (!magnetRef.current) return;
      const rect = magnetRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      centerX = rect.left + window.scrollX + width / 2;
      centerY = rect.top + window.scrollY + height / 2;
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const distanceX = e.pageX - centerX;
      const distanceY = e.pageY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Check if mouse is within padding area
      if (distance < width / 2 + padding || distance < height / 2 + padding) {
        setIsActive(true);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', updateBounds);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength]);

  return (
    <div
      ref={magnetRef}
      className={cn("inline-block", className)}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};
