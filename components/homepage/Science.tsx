"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { scienceVideoStill } from "@/data/images";

const outcomes = [
  { icon: "circle-dot", label: "Focus" },
  { icon: "shield", label: "Trust" },
  { icon: "align-left", label: "Planning" },
  { icon: "star", label: "Morale" },
  { icon: "chat", label: "Communication" },
  { icon: "lightbulb", label: "Problem-solving" },
];

export function Science({ onVideoClick }: { onVideoClick?: (videoId: string) => void } = {}) {
  return (
    <section id="science">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealOnScroll>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold leading-tight text-navy">
              We follow the science. You have the fun. The whole team wins.
            </h2>
            <p className="mt-4 text-lg text-ink-2 leading-relaxed">
              Team building isn&apos;t just fun-and-games. There&apos;s a science to guiding teams to confidence — and every activity we
              run is built to activate immediate and sustainable outcomes.
            </p>
            <div className="outcomes mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {outcomes.map((item) => (
                <div key={item.label} className="oc flex items-center gap-3 rounded-xl bg-bg-soft px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/10 text-lime">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="science-visual">
              <button
                type="button"
                className="video-still relative block w-full rounded-2xl overflow-hidden group"
                onClick={() => {
                  document.dispatchEvent(new CustomEvent("open-video", { detail: "1KEC4d0rXac" }));
                }}
              >
                <img
                  src={scienceVideoStill.src}
                  alt={scienceVideoStill.alt}
                  width={scienceVideoStill.width}
                  height={scienceVideoStill.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="play absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-navy-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 ml-1" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
              <div className="big-stat mt-6 rounded-2xl bg-navy p-6 text-center">
                <b className="block text-5xl font-extrabold text-lime">21%</b>
                <span className="mt-2 block text-sm text-white/80">
                  more profitable — companies with highly engaged employees.
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
