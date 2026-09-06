"use client";

import { site } from "@/data/site";

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="nl grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-[22px] bg-navy p-6 sm:p-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Team building tips, motivation and promos — straight to your inbox.
            </h2>
            <p className="mt-2 text-sm text-white/70">No spam. Unsubscribe any time.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/20"
            />
            <button type="submit" className="btn btn-lime whitespace-nowrap">
              Sign me up!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
