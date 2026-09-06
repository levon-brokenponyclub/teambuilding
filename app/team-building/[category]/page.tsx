"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { ActivityGrid } from "@/components/activities/ActivityGrid";
import { getActivities } from "@/lib/activities";
import { Activity } from "@/lib/types";

interface CategoryPageClientProps {
  params: { category: string };
}

export default function CategoryPageClient({ params }: CategoryPageClientProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    getActivities(100, params.category).then(setActivities);
  }, [params.category]);

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
              {titleMap[params.category] || params.category.replace(/-/g, " ")}
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
