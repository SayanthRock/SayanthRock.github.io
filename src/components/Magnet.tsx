import { type ReactNode, useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < (width / 2) + padding) {
        setIsActive(true);
        springX.set(distanceX / strength);
        springY.set(distanceY / strength);
      } else {
        setIsActive(false);
        springX.set(0);
        springY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, springX, springY]);

  return (
    <motion.div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{
        x: springX,
        y: springY,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}
