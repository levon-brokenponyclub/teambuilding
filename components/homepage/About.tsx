import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { teamPhoto } from "@/data/images";

const checks = [
  "Professional facilitators who read the room and keep every personality involved.",
  "Programmes designed around outcomes — focus, trust, morale — not just games.",
  "Custom challenges for groups of 10 to 1000+, on your site or ours.",
  "Everything included: equipment, prizes, photos and a no-stress booking process.",
];

export function About() {
  return (
    <section id="about" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <RevealOnScroll>
            <div className="about-photo relative">
              <img
                src={teamPhoto.src}
                alt={teamPhoto.alt}
                width={teamPhoto.width}
                height={teamPhoto.height}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
              <span className="since absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-navy shadow-md">
                <img src="/images/badges/1st-place-medal_animated.gif" alt="" width={24} height={24} />
                Est. 2001
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <Eyebrow>Our team building pros, since 2001</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold leading-tight text-navy">
              Real facilitators. Real energy. No cringe.
            </h2>
            <ul className="mt-6 space-y-3">
              {checks.map((text, i) => (
                <li key={i} className="flex gap-3 text-ink-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-navy-900">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="lime" data-quote>
                Get in touch
              </Button>
              <Button variant="ghost" href="/about/">
                About us
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
