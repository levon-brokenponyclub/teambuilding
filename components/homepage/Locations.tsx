import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { cities } from "@/data/cities";

export function Locations() {
  return (
    <section id="locations">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <Eyebrow>Locations</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy">One team. The whole country.</h2>
            <p className="mt-4 text-lg text-ink-2 leading-relaxed">
              Our own crews in four cities, 500+ partner venues, and activities that travel anywhere in South Africa — beach, bush,
              boardroom or browser.
            </p>
          </div>
        </RevealOnScroll>

        <div className="loc-grid mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <RevealOnScroll key={city.slug}>
              <a
                href={city.href}
                className="loc group block rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-navy group-hover:text-lime transition-colors">{city.name}</h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">{city.intro}</p>
                <span className="more mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                  Explore {city.short}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" href="/province/team-building-venues/">
            Browse all 500+ venues
          </Button>
        </div>
      </div>
    </section>
  );
}
