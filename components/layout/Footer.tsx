import { site } from "@/data/site";
import { cities } from "@/data/cities";

const quickLinks = [
  { href: "/team-building/on-site-team-building/", label: "View All On-site Team Building" },
  { href: "/team-building/virtual-team-building/", label: "View All Virtual Team Building" },
  { href: "/about/", label: "About" },
  { href: "/team-building-durban/", label: "Team Building Durban" },
  { href: "/team-building-joburg/", label: "Team Building Johannesburg" },
  { href: "/team-building-cape-town/", label: "Team Building Cape Town" },
  { href: "/team-building-port-elizabeth/", label: "Team Building Port Elizabeth" },
  { href: "/schools-team-building/", label: "Schools Team Building" },
  { href: "/our-blog/", label: "News & Insights" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/faqs/", label: "FAQs" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Bring out the awesome in your team. SA's only national team building company, since 2001.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-lime transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <a href={city.href} className="text-sm text-white/80 hover:text-lime transition-colors">
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li>
                <a href={site.phoneHref} className="text-sm text-white/80 hover:text-lime transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-white/80 hover:text-lime transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="pt-2">
                <button className="btn btn-lime" data-quote>
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © 2026 {site.name}. All rights reserved.
            {" · "}
            <a href="/privacy-policy/" className="hover:text-lime transition-colors">Privacy</a>
            {" · "}
            <a href="/terms-and-conditions/" className="hover:text-lime transition-colors">Terms</a>
          </p>
          <a href="#top" className="text-sm text-white/60 hover:text-lime transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
