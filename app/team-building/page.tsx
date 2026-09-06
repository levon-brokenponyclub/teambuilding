"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { ActivityGrid } from "@/components/activities/ActivityGrid";
import { getActivities } from "@/lib/activities";
import { Activity } from "@/lib/types";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    getActivities(50).then(setActivities);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-navy text-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Team building <span className="text-lime">activities</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              From beach olympics to virtual escapes, find the perfect experience for your team.
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
