import { useRef, useState, useEffect, type ReactNode, type ComponentPropsWithRef } from 'react';
import { cn } from '../utils/cn';

interface MagnetProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  wrapperClassName,
  className,
  ref,
  ...props
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!innerRef.current) return;

      const { left, top, width, height } = innerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < padding) {
        setIsActive(true);
        setPosition({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={cn("relative", wrapperClassName)} {...props}>
      <div
        ref={innerRef}
        className={cn("will-change-transform", className)}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
        }}
      >
        {children}
      </div>
    </div>
  );
}
