"use client";

"use client";

import { useState } from "react";
import { Activity } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

interface ActivitiesProps {
  activities: Activity[];
}

const filters = [
  { key: "all", label: "All" },
  { key: "popular", label: "Most Popular" },
  { key: "outdoor", label: "Outdoor" },
  { key: "indoor", label: "Indoor" },
  { key: "newest", label: "Newest" },
  { key: "promo", label: "On Promotion" },
];

function getBadge(activity: Activity) {
  const tags = activity.tags || [];
  if (tags.some((t) => t.slug === "most-popular")) return { text: "Most popular", hot: true };
  if (tags.some((t) => t.slug === "newest")) return { text: "New", hot: false };
  const cats = activity.categories || [];
  const type = cats.find((c) => c.parentId)?.slug || cats[0]?.slug;
  if (type === "on-site-team-building") return { text: "On-site", hot: false };
  if (type === "virtual-team-building") return { text: "Virtual", hot: false };
  return { text: "", hot: false };
}

export function Activities({ activities }: ActivitiesProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? activities : activities.slice(0, 8);

  const filtered = activeFilter === "all"
    ? displayed
    : activeFilter === "popular"
      ? displayed.filter((a) => a.tags.some((t) => t.slug === "most-popular"))
      : displayed.filter((a) => {
          if (activeFilter === "outdoor") return a.tags.some((t) => t.slug === "outdoor");
          if (activeFilter === "indoor") return a.tags.some((t) => t.slug === "indoor");
          if (activeFilter === "newest") return a.tags.some((t) => t.slug === "newest");
          if (activeFilter === "promo") return a.tags.some((t) => t.slug === "on-promotion");
          return true;
        });

  return (
    <section className="activities" id="activities">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <div className="act-head flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-widest uppercase text-navy mb-4">
              <span className="h-[3px] w-[22px] rounded-full bg-lime" />
              Explore activities
            </span>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy">Pick your team&apos;s next adventure.</h2>
          </div>
          <div className="seg flex rounded-full border border-line p-1" role="tablist" aria-label="Activity type">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "onsite"}
              className="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors"
              onClick={() => setActiveFilter("onsite")}
            >
              On-Site
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "virtual"}
              className="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors"
              onClick={() => setActiveFilter("virtual")}
            >
              Virtual
            </button>
          </div>
        </div>

        <div className="chips mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Chip key={f.key} active={activeFilter === f.key} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </Chip>
          ))}
        </div>

        <div className="cards mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((activity) => {
            const badge = getBadge(activity);
            const img = activity.featuredImage?.node || activity.details?.gallery?.nodes?.[0];
            const rawDescription = activity.details?.shortDescription || activity.excerpt || "";
            const description = rawDescription.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
            return (
              <a
                key={activity.id}
                href={`/team-building/${(activity.categories || []).find((c) => c.parentId)?.slug || (activity.categories || [])[0]?.slug || 'on-site-team-building'}/${activity.slug}/`}
                className="card group block rounded-2xl border border-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-bg-soft">
                  {img && (
                    <img
                      src={img.sourceUrl}
                      alt={img.altText}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  {badge.text && (
                    <span
                      className={`tag absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold ${
                        badge.hot ? "bg-lime text-navy-900" : "bg-white text-navy"
                      }`}
                    >
                      {badge.text}
                    </span>
                  )}
                </div>
                <div className="body p-4">
                  <h3 className="font-bold text-navy">{activity.title}</h3>
                  <p className="mt-1 text-sm text-ink-2 line-clamp-2">
                    {description}
                  </p>
                </div>
                <span className="go absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-lime text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="act-foot mt-10 flex flex-wrap gap-4">
          {!showAll && activities.length > 8 && (
            <Button variant="navy" onClick={() => setShowAll(true)}>
              Show all activities
            </Button>
          )}
          <Button variant="ghost" href="/team-building/on-site-team-building/">
            All on-site activities
          </Button>
          <Button variant="ghost" href="/team-building/virtual-team-building/">
            All virtual activities
          </Button>
          <Button variant="ghost" href="/schools-team-building/">
            Schools
          </Button>
        </div>
      </div>
    </section>
  );
}
