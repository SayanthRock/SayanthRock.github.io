import { cn } from '../utils/cn';

interface LiveProjectButtonProps {
  className?: string;
  label?: string;
}

export function LiveProjectButton({ className, label = "Live Project" }: LiveProjectButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border-2 border-[#D7E2EA]",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest",
        "hover:bg-[#D7E2EA]/10 transition-colors duration-200",
        className
      )}
    >
      {label}
    </button>
  );
}
