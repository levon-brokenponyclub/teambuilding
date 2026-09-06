"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalWrapper } from "@/components/layout/QuoteModalWrapper";
import { VideoModalWrapper } from "@/components/layout/VideoModalWrapper";
import { Hero } from "@/components/homepage/Hero";
import { Clients } from "@/components/homepage/Clients";
import { Stats } from "@/components/homepage/Stats";
import { Science } from "@/components/homepage/Science";
import { Activities } from "@/components/homepage/Activities";
import { Locations } from "@/components/homepage/Locations";
import { About } from "@/components/homepage/About";
import { Quiz } from "@/components/homepage/Quiz";
import { Tips } from "@/components/homepage/Tips";
import { Newsletter } from "@/components/homepage/Newsletter";
import { useState, useEffect } from "react";
import { gql } from "@/lib/graphql";
import { Activity } from "@/lib/types";

const ACTIVITIES_QUERY = `
query GetActivities {
  activities(first: 20) {
    nodes {
      id
      title
      slug
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      activityDetails {
        shortDescription
        gallery {
          nodes {
            sourceUrl
            altText
          }
        }
      }
      activityCats {
        nodes {
          slug
          parent {
            node {
              slug
            }
          }
        }
      }
      activityTags {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`;

export default function HomePage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    gql<{ activities: { nodes: Activity[] } }>(ACTIVITIES_QUERY)
      .then((data) => setActivities(data.activities.nodes))
      .catch(() => setActivities([]));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Stats />
        <Science />
        <Activities activities={activities} />
        <Locations />
        <About />
        <Quiz />
        <Tips />
        <Newsletter />
      </main>
      <Footer />
      <QuoteModalWrapper />
      <VideoModalWrapper />
    </>
  );
}
