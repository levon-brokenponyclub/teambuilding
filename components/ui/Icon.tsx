import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name?: string;
  children?: React.ReactNode;
}

const icons: Record<string, React.ReactNode> = {
  arrowRight: (
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  play: <path d="M8 5v14l11-7z" fill="currentColor" />,
  check: (
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.6L6.4 12.2l1.6-1.6 2.8 2.8 5.2-5.2 1.6 1.6z" fill="currentColor" />
  ),
  star: <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6L5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor" />,
  shield: (
    <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
  ),
};

export function Icon({ name, children, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
      {...props}
    >
      {name && icons[name] ? icons[name] : children}
    </svg>
  );
}
