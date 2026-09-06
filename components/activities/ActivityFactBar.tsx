import { Activity } from "@/lib/types";

interface ActivityFactBarProps {
  activity: Activity;
}

export function ActivityFactBar({ activity }: ActivityFactBarProps) {
  const summary = activity.details?.activitySummary || [];

  return (
    <section className="fact-bar bg-bg-soft border-b border-line">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
        <div className="flex flex-wrap gap-6 sm:gap-10">
          {summary.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">
                {item.summaryName.replace(/:/g, "")}
              </span>
              <span className="mt-1 text-sm font-bold text-navy">{item.summaryValue}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
