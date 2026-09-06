import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

const posts = [
  { n: 1, title: "The Final Push: How to Keep Your Team Strong Until Year-End", href: "/our-blog/top-blogs/the-final-push-how-to-keep-your-team-strong-until-year-end/" },
  { n: 2, title: "5 Things South African Teams Need Most Right Now", href: "/our-blog/top-blogs/5-things-south-african-teams-need-most-right-now/" },
  { n: 3, title: "Why Doesn’t Your Team Care About Your Customers as Much as You Do?", href: "/our-blog/top-blogs/why-doesnt-your-team-care-about-your-customers-as-much-as-you-do/" },
  { n: 4, title: "Stronger Together: The Power of Great Teams", href: "/our-blog/top-blogs/stronger-together-the-power-of-great-teams/" },
  { n: 5, title: "The 5 Biggest Challenges Facing South African Teams in 2026", href: "/our-blog/top-blogs/new-for-2026-dash4cash-the-team-building-money-game-has-arrived/" },
];

export function Tips() {
  return (
    <section id="tips">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <Eyebrow>Our best advice</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy">For team building champions.</h2>
          </div>
        </RevealOnScroll>

        <div className="posts mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.href} delay={i * 0.08}>
              <article className="post group flex gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="n flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">
                  {post.n}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-bold text-navy leading-snug group-hover:text-lime transition-colors">{post.title}</h3>
                  <a href={post.href} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-lime transition-colors">
                    Read more
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" href="/our-blog/">
            All insights
          </Button>
        </div>
      </div>
    </section>
  );
}
