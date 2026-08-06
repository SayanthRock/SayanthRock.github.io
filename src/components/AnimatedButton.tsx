import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = 'primary',
  href,
  ...props
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;

    setPosition({ x, y });
  };


  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold uppercase tracking-wider rounded-full overflow-hidden transition-colors duration-300";

  const variants = {
    primary: "bg-accent text-white hover:bg-white hover:text-dark",
    secondary: "bg-white text-dark hover:bg-accent hover:text-white",
    outline: "border-2 border-white/20 text-white hover:bg-white hover:text-dark"
  };

  const Content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10 flex items-center gap-2"
    >
      {children}
    </motion.div>
  );

  const buttonClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className="inline-block group">
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}


          className={buttonClasses}
          {...props}
        >
          {Content}
        </button>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}


      className={buttonClasses}
      {...props}
    >
      {Content}
    </button>
  );
}
