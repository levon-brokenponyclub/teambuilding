import { Activity } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ActivityHeroProps {
  activity: Activity;
}

export function ActivityHero({ activity }: ActivityHeroProps) {
  const img = activity.featuredImage?.node || activity.details?.gallery?.nodes?.[0];
  const category = activity.categories?.find((c) => c.parentId) || activity.categories?.[0];

  return (
    <section className="activity-hero relative">
      <div className="absolute inset-0 bg-navy/80 z-10" />
      {img && (
        <img
          src={img.sourceUrl}
          alt={img.altText}
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="relative z-20 mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24 text-white">
        <RevealOnScroll>
          <div className="max-w-3xl">
            {category && <Eyebrow className="text-lime">{category.name}</Eyebrow>}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {activity.title}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              {activity.details?.shortDescription?.replace(/<[^>]+>/g, "")}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
