interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-lime via-[#9be33f] to-lime bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] ${className}`}
    >
      {children}
    </span>
  );
}
