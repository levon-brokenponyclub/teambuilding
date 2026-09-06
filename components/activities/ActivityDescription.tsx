import { Activity } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ActivityDescriptionProps {
  activity: Activity;
}

export function ActivityDescription({ activity }: ActivityDescriptionProps) {
  return (
    <section className="activity-description">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>About this activity</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mt-2">
              {activity.details?.secondaryTitle || activity.title}
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            {activity.details?.overview && (
              <div
                className="text-ink-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activity.details.overview }}
              />
            )}
            {activity.details?.activityDescription && (
              <div
                className="mt-6 text-ink-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activity.details.activityDescription }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
