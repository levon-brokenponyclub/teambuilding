import { type ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-widest uppercase text-navy mb-4 ${className}`}
    >
      <span className="h-[3px] w-[22px] rounded-full bg-lime" />
      {children}
    </span>
  );
}
