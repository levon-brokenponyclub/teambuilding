import { Activity } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

interface ActivityHighlightsProps {
  activity: Activity;
}

export function ActivityHighlights({ activity }: ActivityHighlightsProps) {
  const improvements = activity.details?.activityImprovements
    ? activity.details.activityImprovements
        .replace(/<[^>]+>/g, "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  if (improvements.length === 0) return null;

  return (
    <section className="activity-highlights bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <Eyebrow className="text-lime">Key outcomes</Eyebrow>
        <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-white mt-2">
          What your team will gain
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {improvements.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-navy-900">
                <Icon name="check" className="h-3 w-3" />
              </span>
              <span className="text-white/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
