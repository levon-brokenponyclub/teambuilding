import { type ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({ children, active = false, onClick, className = "" }: ChipProps) {
  const base =
    "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer select-none";

  const state = active
    ? "bg-navy border-navy text-white"
    : "bg-white border-line text-ink-2 hover:border-navy hover:text-navy";

  const classes = `${base} ${state} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes} aria-pressed={active}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}
