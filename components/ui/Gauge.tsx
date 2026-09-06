"use client";

import { useEffect, useRef, useState } from "react";

interface GaugeProps {
  value: number;
  label?: string;
  className?: string;
}

export function Gauge({ value, label = "team rating", className = "" }: GaugeProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1500;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.floor(eased * value));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`relative aspect-square w-full max-w-[300px] rounded-full bg-conic-gradient from-lime to-transparent transition-all duration-1000 [background:conic-gradient(var(--lime)_0_var(--score,0%),rgb(255_255_255_/_0.12)_0)] ${className}`}
      style={{ "--score": `${display}%` } as React.CSSProperties}
    >
      <div className="absolute inset-[14%] rounded-full bg-navy-900 grid place-items-center">
        <div className="relative text-center">
          <span className="block text-[3.2rem] font-extrabold leading-none tracking-tight text-lime">
            {display}
          </span>
          <small className="block text-xs font-medium text-white/70">{label}</small>
        </div>
      </div>
    </div>
  );
}
