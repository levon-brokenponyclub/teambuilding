import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  { icon: "/images/badges/1st-place-medal_animated.gif", alt: "Medal", end: 2001, label: "Team building since 2001. 25+ years of getting teams to click." },
  { icon: "/images/badges/star_animated.gif", alt: "Star", end: 250, suffix: "+", label: "Five-star reviews from happy teams across the country." },
  { icon: "/images/badges/rocket_animated.gif", alt: "Rocket", end: 500, suffix: "+", label: "Venues nationwide. SA's only national team building company." },
  { icon: "/images/badges/superglue-animation-512px.gif", alt: "Glue", end: 1, prefix: "#", label: "Innovators in virtual team builds — teams anywhere, connected." },
];

export function Stats() {
  return (
    <section className="usps bg-navy text-white" id="why">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <Eyebrow className="text-lime">Why people love team building with us</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              SA&apos;s most experienced <span className="grad">team building</span> company.
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              We&apos;re the only team building company in South Africa that runs the same world-class programmes in every province —
              with the track record to prove it.
            </p>
          </div>
        </RevealOnScroll>

        <div className="stat-grid mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="stat rounded-[22px] bg-white/6 border border-white/12 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <img src={stat.icon} alt={stat.alt} width={52} height={52} className="mb-4" />
                <div className="text-4xl sm:text-5xl font-extrabold leading-none text-lime tracking-tight">
                  {stat.prefix}
                  {stat.end === 1 ? stat.prefix : <span>{stat.end}</span>}
                  {stat.suffix}
                </div>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
