import { cn } from '../utils/cn';

interface LiveProjectButtonProps {
  className?: string;
  onClick?: () => void;
}

export function LiveProjectButton({ className, onClick }: LiveProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base",
        "transition-colors duration-300 hover:bg-[#D7E2EA]/10",
        className
      )}
    >
      Live Project
    </button>
  );
}
