import { useState, useRef, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) => {
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Check if within padding distance
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < maxDistance) {
      setIsActive(true);
      setTransform({
        x: distanceX / strength,
        y: distanceY / strength,
      });
    } else {
      setIsActive(false);
      setTransform({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        display: 'inline-block',
        willChange: 'transform',
      }}
    >
      <div
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
};
