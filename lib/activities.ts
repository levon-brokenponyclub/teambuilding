import { gql } from "@/lib/graphql";
import { Activity, ActivityCategory } from "@/lib/types";

const ACTIVITIES_QUERY = `
query GetActivities($first: Int) {
  activities(first: $first) {
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

const CATEGORIES_QUERY = `
query GetActivityCategories {
  activityCats(first: 10) {
    nodes {
      id
      name
      slug
      parent {
        node {
          slug
        }
      }
    }
  }
}
`;

const ACTIVITY_QUERY = `
query GetActivity($id: ID!) {
  activity(id: $id, idType: DATABASE_ID) {
    id
    title
    slug
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    activityDetails {
      secondaryTitle
      shortDescription
      overview
      activityDescription
      activityImprovements
      activitySummary {
        summaryName
        summaryValue
      }
      itinerary {
        timing
        itinerary
      }
      pricingDescription
      gallery {
        nodes {
          sourceUrl
          altText
        }
      }
      faqAccordion {
        question
        answer
      }
      clientLogoCarousel {
        nodes {
          sourceUrl
          altText
        }
      }
      featuredVideo
    }
    activityCats {
      nodes {
        name
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
`;

export async function getActivities(first = 50, categorySlug?: string) {
  const { activities } = await gql<{ activities: { nodes: Activity[] } }>(ACTIVITIES_QUERY, { first });
  let nodes = activities.nodes;
  if (categorySlug) {
    nodes = nodes.filter((a) => {
      const cats = a.categories || [];
      return cats.some((c) => c.slug === categorySlug || c.parentId && c.slug === categorySlug);
    });
  }
  return nodes;
}

export async function getActivityCategories() {
  const { activityCats } = await gql<{ activityCats: { nodes: ActivityCategory[] } }>(CATEGORIES_QUERY);
  return activityCats.nodes;
}

export async function getActivityBySlug(categorySlug: string, slug: string) {
  // Fetch all activities and find by matching category path + slug
  const all = await getActivities(100);
  const activity = all.find((a) => {
    const cats = a.categories || [];
    const hasCategory = cats.some((c) => c.slug === categorySlug);
    const hasSlug = a.slug === slug;
    return hasCategory && hasSlug;
  });

  if (!activity) return null;

  // Fetch full details by ID
  const { activity: full } = await gql<{ activity: Activity }>(ACTIVITY_QUERY, { id: activity.id });
  return full;
}
