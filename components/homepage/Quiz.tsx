import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Gauge } from "@/components/ui/Gauge";

export function Quiz() {
  return (
    <section className="quiz">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
        <RevealOnScroll>
          <div className="quiz-box rounded-[22px] bg-navy p-8 sm:p-12">
            <div className="quiz-inner grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Eyebrow className="text-lime">Free 2-minute quiz</Eyebrow>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  How good (or bad) is your team?
                </h2>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Answer a handful of quick questions and get an instant team rating — plus the activities most likely to move your
                  score.
                </p>
                <Button variant="lime" href="#quiz" className="mt-6">
                  Take the quiz — get a team rating
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Button>
              </div>
              <div className="flex justify-center">
                <Gauge value={87} label="team rating" />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
