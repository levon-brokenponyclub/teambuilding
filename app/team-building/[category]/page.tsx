import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { ActivityGrid } from "@/components/activities/ActivityGrid";
import { getActivities, getActivityCategories } from "@/lib/activities";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getActivityCategories();
  const slugs = new Set<string>();
  for (const cat of categories) {
    if (cat.parent?.node?.slug) {
      slugs.add(cat.parent.node.slug);
    }
    slugs.add(cat.slug);
  }
  return Array.from(slugs).map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const titleMap: Record<string, string> = {
    "on-site-team-building": "On-Site Team Building Activities | Beach & Bush",
    "virtual-team-building": "Virtual Team Building Activities | Beach & Bush",
    "team-building": "All Team Building Activities | Beach & Bush",
  };
  return {
    title: titleMap[category] || "Team Building Activities | Beach & Bush",
    description: `Browse our ${category.replace(/-/g, " ")} team building experiences.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const activities = await getActivities(100, category);

  const titleMap: Record<string, string> = {
    "on-site-team-building": "On-site team building",
    "virtual-team-building": "Virtual team building",
    "team-building": "All team building",
  };

  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-navy text-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {titleMap[category] || category.replace(/-/g, " ")}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              {activities.length} {activities.length === 1 ? "activity" : "activities"} available.
            </p>
          </div>
        </section>
        <ActivityGrid activities={activities} showFilters />
      </main>
      <Footer />
      <QuoteModalWrapper />
      <VideoModalWrapper />
    </>
  );
}
