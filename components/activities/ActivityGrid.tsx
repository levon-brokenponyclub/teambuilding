"use client";

import { useState } from "react";
import { Activity } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

interface ActivityGridProps {
  activities: Activity[];
  showFilters?: boolean;
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

export function ActivityGrid({ activities, showFilters = false }: ActivityGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? activities
    : activeFilter === "popular"
      ? activities.filter((a) => a.tags.some((t) => t.slug === "most-popular"))
      : activities.filter((a) => {
          if (activeFilter === "outdoor") return a.tags.some((t) => t.slug === "outdoor");
          if (activeFilter === "indoor") return a.tags.some((t) => t.slug === "indoor");
          if (activeFilter === "newest") return a.tags.some((t) => t.slug === "newest");
          if (activeFilter === "promo") return a.tags.some((t) => t.slug === "on-promotion");
          return true;
        });

  return (
    <section className="activities-list">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        {showFilters && (
          <>
            <div className="chips mb-8 flex flex-wrap gap-2">
              {filters.map((f) => (
                <Chip key={f.key} active={activeFilter === f.key} onClick={() => setActiveFilter(f.key)}>
                  {f.label}
                </Chip>
              ))}
            </div>
          </>
        )}

        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                  {img && (
                    <img
                      src={img.sourceUrl}
                      alt={img.altText}
                      width={800}
                      height={600}
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
                <div className="body p-5">
                  <h3 className="font-bold text-navy text-lg">{activity.title}</h3>
                  <p className="mt-2 text-sm text-ink-2 line-clamp-2">{description}</p>
                </div>
                <span className="go absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-lime text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </a>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink-3">No activities match your filter.</p>
        )}
      </div>
    </section>
  );
}
