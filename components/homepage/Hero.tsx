"use client";

import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Gauge } from "@/components/ui/Gauge";
import { GradientText } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { site } from "@/data/site";

const bentoImages = [
  { className: "b1", src: "/images/hero/bombsquad-escape.jpg", alt: "Team celebrating after Bombsquad Escape", p: 30, eager: true },
  { className: "b2", src: "/images/hero/minute-to-win-it.jpg", alt: "Minute To Win It challenge in action", p: 60, eager: true },
  { className: "b3", src: "/images/hero/team-hands-up.jpg", alt: "Team with hands in the air", p: 20, hasPlay: true, videoId: "la73PZ5l1nw", eager: true },
  { className: "b4", src: "/images/hero/maboneng-dancing.jpg", alt: "Team dancing during Maboneng Challenge", p: 45, eager: false },
];

const pills = [
  { icon: "star", text: "250+ five-star reviews" },
  { icon: "shield", text: "500+ venues nationwide" },
  { icon: "check", text: "Since 2001" },
];

export function Hero({ onVideoClick }: { onVideoClick?: (videoId: string) => void } = {}) {
  return (
    <section className="hero">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-navy">
              Bring out the <GradientText>awesome</GradientText> in your team.
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-xl">
              Since 2001 we&apos;ve made it our business to fix bad workplace vibes and poor morale. We&apos;ve helped 1000&apos;s of teams
              swap company politics for <strong>team alignment, happy bonds</strong> and <strong>team confidence</strong> — on-site anywhere
              in SA, or virtually anywhere on earth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#activities" variant="navy">
                On-Site Team Building
                <Icon name="arrowRight" />
              </Button>
              <Button href="#activities" variant="ghost">
                Virtual Team Building
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {pills.map((pill, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  <Icon name={pill.icon} className="h-5 w-5 text-lime" />
                  {pill.text}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="bento relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {bentoImages.map((img) => (
                  <figure
                    key={img.className}
                    className={`${img.className} relative rounded-2xl overflow-hidden`}
                    style={{ "--p": `${img.p}%` } as React.CSSProperties}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                      loading={img.eager ? "eager" : "lazy"}
                    />
                    {img.hasPlay && (
                      <button
                        type="button"
                        className="play"
                        aria-label="Watch our team building video"
                        onClick={() => {
                          document.dispatchEvent(new CustomEvent("open-video", { detail: img.videoId || "la73PZ5l1nw" }));
                        }}
                      >
                        <span>
                          <Icon name="play" className="h-7 w-7 text-navy-900 ml-1" />
                        </span>
                      </button>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
