"use client";

import { useState, useEffect } from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Icon } from "@/components/ui/Icon";
import { MobileNav } from "./MobileNav";

export const navLinks = [
  { href: "/team-building/on-site-team-building/", label: "On-site Team Building" },
  { href: "/team-building/virtual-team-building/", label: "Virtual Team Building" },
];

const footerLinks = [
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuote = () => {
    document.dispatchEvent(new Event("open-quote"));
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center" aria-label="Beach & Bush Team Building — home">
            <img
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              className="h-10 w-auto sm:h-12"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-navy hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={site.phoneHref} className="hidden sm:inline-flex">
              <Button variant="ghost" className="!py-2 !px-4 text-sm">
                {site.phone}
              </Button>
            </a>
            <Button variant="lime" className="hidden md:inline-flex" onClick={openQuote}>
              Get a Quote
            </Button>
            <button
              type="button"
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block h-0.5 w-6 bg-navy transition-all" />
              <span className="block h-0.5 w-6 bg-navy transition-all" />
              <span className="block h-0.5 w-6 bg-navy transition-all" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
