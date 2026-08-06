import { type ReactNode, type ComponentPropsWithRef } from 'react';
import { cn } from '../utils/cn';

interface LiveProjectButtonProps extends ComponentPropsWithRef<'button'> {
  children?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export function LiveProjectButton({ className, children = "Live Project", as = 'button', href, ref, ...props }: LiveProjectButtonProps) {
  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      href={href}
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest outline-none",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        "transition-colors hover:bg-[#D7E2EA]/10 inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
