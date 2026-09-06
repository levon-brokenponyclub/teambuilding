import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { ActivityHero } from "@/components/activities/ActivityHero";
import { ActivityFactBar } from "@/components/activities/ActivityFactBar";
import { ActivityDescription } from "@/components/activities/ActivityDescription";
import { ActivityHighlights } from "@/components/activities/ActivityHighlights";
import { ActivityItinerary } from "@/components/activities/ActivityItinerary";
import { ActivityPricing } from "@/components/activities/ActivityPricing";
import { ActivityGallery } from "@/components/activities/ActivityGallery";
import { ActivityFaqs } from "@/components/activities/ActivityFaqs";
import { ActivityRelated } from "@/components/activities/ActivityRelated";
import { getActivityBySlug, getActivities } from "@/lib/activities";

interface ActivityPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const activities = await getActivities(200);
  return activities.map((activity) => {
    const cats = activity.categories || [];
    const category = cats.find((c) => c.parentId)?.slug || cats[0]?.slug || "on-site-team-building";
    return { category, slug: activity.slug };
  });
}

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const activity = await getActivityBySlug(category, slug);
  if (!activity) return { title: "Activity Not Found" };
  return {
    title: `${activity.title} | Beach & Bush Team Building`,
    description: activity.details?.shortDescription?.replace(/<[^>]+>/g, "").slice(0, 160) || `Team building activity: ${activity.title}`,
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { category, slug } = await params;
  const activity = await getActivityBySlug(category, slug);

  if (!activity) {
    return (
      <>
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-32 text-center">
            <h1 className="text-3xl font-bold text-navy">Activity not found</h1>
            <p className="mt-4 text-ink-2">The activity you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          </div>
        </main>
        <Footer />
        <QuoteModalWrapper />
        <VideoModalWrapper />
      </>
    );
  }

  const related = await getActivities(4, category);

  return (
    <>
      <Header />
      <main>
        <ActivityHero activity={activity} />
        <ActivityFactBar activity={activity} />
        <ActivityDescription activity={activity} />
        <ActivityHighlights activity={activity} />
        <ActivityItinerary activity={activity} />
        <ActivityPricing activity={activity} />
        <ActivityGallery activity={activity} />
        <ActivityFaqs activity={activity} />
        <ActivityRelated activities={related} currentSlug={activity.slug} />
      </main>
      <Footer />
      <QuoteModalWrapper />
      <VideoModalWrapper />
    </>
  );
}
