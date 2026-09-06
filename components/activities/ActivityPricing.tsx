import { Activity } from "@/lib/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface ActivityPricingProps {
  activity: Activity;
}

export function ActivityPricing({ activity }: ActivityPricingProps) {
  if (!activity.details?.pricingDescription) return null;

  return (
    <section className="activity-pricing bg-bg-soft">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mt-2">
              Investment in your team
            </h2>
          </div>
          <div>
            <div
              className="prose prose-lg max-w-none text-ink-2"
              dangerouslySetInnerHTML={{ __html: activity.details.pricingDescription }}
            />
            <div className="mt-6">
              <Button variant="lime" data-quote>
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
