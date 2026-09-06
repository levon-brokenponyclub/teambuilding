import { type ReactNode } from "react";

type ButtonVariant = "lime" | "navy" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  lime: "bg-lime text-navy-900 shadow-[0_10px_24px_-10px_rgb(102_204_1_/_0.7)] hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-12px_rgb(102_204_1_/_0.8)]",
  navy: "bg-navy text-white hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-20px_rgb(0_0_88_/_0.28)]",
  ghost: "bg-white border border-line text-navy hover:border-navy hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "lime",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(disabled ? { "aria-disabled": "true" } : {})}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
