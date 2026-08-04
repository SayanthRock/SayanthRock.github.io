import { type ComponentProps } from 'react';
import { cn } from '../utils/cn';

interface LiveProjectButtonProps extends ComponentProps<'button'> {
  className?: string;
}

export const LiveProjectButton = ({ className, ref, ...props }: LiveProjectButtonProps) => {
  return (
    <button
      ref={ref}
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] bg-transparent",
        "text-[#D7E2EA] font-medium uppercase tracking-widest",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base",
        "hover:bg-[#D7E2EA]/10 transition-colors duration-300",
        className
      )}
      {...props}
    >
      Live Project
    </button>
  );
};
LiveProjectButton.displayName = 'LiveProjectButton';
