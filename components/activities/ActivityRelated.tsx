import { Activity } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface ActivityRelatedProps {
  activities: Activity[];
  currentSlug: string;
}

export function ActivityRelated({ activities, currentSlug }: ActivityRelatedProps) {
  const related = activities.filter((a) => a.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="activity-related bg-bg-soft">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mb-8">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((activity) => {
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
                </div>
                <div className="body p-5">
                  <h3 className="font-bold text-navy text-lg">{activity.title}</h3>
                  <p className="mt-2 text-sm text-ink-2 line-clamp-2">{description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
