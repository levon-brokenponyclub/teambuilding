import { Activity } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ActivityItineraryProps {
  activity: Activity;
}

export function ActivityItinerary({ activity }: ActivityItineraryProps) {
  const items = activity.details?.itinerary || [];

  if (items.length === 0) return null;

  return (
    <section className="activity-itinerary">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <Eyebrow>What to expect</Eyebrow>
        <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mt-2">
          Activity itinerary
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-line bg-white p-6">
              <div
                className="text-sm font-semibold text-lime mb-2"
                dangerouslySetInnerHTML={{ __html: item.timing }}
              />
              <div
                className="text-ink-2"
                dangerouslySetInnerHTML={{ __html: item.itinerary }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
