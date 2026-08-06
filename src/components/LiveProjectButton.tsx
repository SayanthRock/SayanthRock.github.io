import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useState } from 'react';

export function LiveProjectButton({
  href,
  variant = 'demo'
}: {
  href?: string;
  variant?: 'demo' | 'github';
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-md transition-all hover:bg-white hover:text-dark"
    >
      <span className="font-semibold uppercase tracking-wider text-sm transition-colors group-hover:text-dark">
        {variant === 'demo' ? 'Live Demo' : 'GitHub'}
      </span>
      <motion.div
        animate={{
          x: isHovered ? 4 : 0,
          rotate: variant === 'demo' ? (isHovered ? -45 : 0) : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-white group-hover:text-dark"
      >
        {variant === 'demo' ? <ArrowRight size={18} /> : <Github size={18} />}
      </motion.div>
    </a>
  );
}
