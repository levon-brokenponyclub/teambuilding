import { Activity } from "@/lib/types";

interface ActivityFaqsProps {
  activity: Activity;
}

export function ActivityFaqs({ activity }: ActivityFaqsProps) {
  const faqs = activity.details?.faqAccordion || [];

  if (faqs.length === 0) return null;

  return (
    <section className="activity-faqs">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mb-8">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <details key={i} className="rounded-2xl border border-line bg-white p-6 group">
              <summary className="font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <span className="ml-4 text-ink-3 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div
                className="mt-4 text-ink-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
