"use client";

import { site } from "@/data/site";
import { navLinks } from "@/components/layout/Header";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 md:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-line">
        <span className="font-bold text-navy">Menu</span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-ink-3 hover:text-navy transition-colors"
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="p-6 flex flex-col gap-4" aria-label="Mobile">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg font-semibold text-navy hover:text-lime transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a href={site.phoneHref} onClick={onClose} className="text-lg font-semibold text-navy hover:text-lime transition-colors">
          {site.phone}
        </a>
        <button className="btn btn-lime mt-4" data-quote onClick={onClose}>
          Get a Quote
        </button>
      </nav>
    </div>
  );
}
