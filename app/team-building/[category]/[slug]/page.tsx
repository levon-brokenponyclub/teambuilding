"use client";

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
import { useState, useEffect } from "react";
import { Activity } from "@/lib/types";
import { getActivityBySlug } from "@/lib/activities";

interface ActivityPageClientProps {
  params: { category: string; slug: string };
}

export default function ActivityPageClient({ params }: ActivityPageClientProps) {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [related, setRelated] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getActivityBySlug(params.category, params.slug).then((data) => {
      if (cancelled) return;
      setActivity(data);
      if (data) {
        setRelated([]);
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [params.category, params.slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-32 text-center">
            <p className="text-ink-3">Loading activity...</p>
          </div>
        </main>
        <Footer />
        <QuoteModalWrapper />
        <VideoModalWrapper />
      </>
    );
  }

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
