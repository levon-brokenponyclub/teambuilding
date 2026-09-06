export interface WPImage {
  id: string;
  sourceUrl: string;
  altText: string;
  width?: number;
  height?: number;
}

export interface ActivityCategory {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
}

export interface ActivityTag {
  id: string;
  name: string;
  slug: string;
}

export interface ActivitySummaryRow {
  summaryName: string;
  summaryValue: string;
}

export interface ItineraryRow {
  timing: string;
  itinerary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ActivityDetails {
  secondaryTitle?: string;
  shortDescription?: string;
  overview?: string;
  activityDescription?: string;
  activityImprovements?: string;
  activitySummary?: ActivitySummaryRow[];
  itinerary?: ItineraryRow[];
  pricingDescription?: string;
  gallery?: { nodes: WPImage[] };
  faqAccordion?: FaqItem[];
  clientLogoCarousel?: { nodes: WPImage[] };
  featuredVideo?: string;
}

export interface Activity {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  featuredImage?: { node: WPImage };
  categories: ActivityCategory[];
  tags: ActivityTag[];
  details: ActivityDetails;
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  count: number;
  parentId?: string;
}

export interface VenueSummaryRow {
  summaryName: string;
  summaryValue: string;
}

export interface VenueDetails {
  venueAddress?: string;
  venueSummary?: VenueSummaryRow[];
  sliderGallery?: WPImage[];
}

export interface Venue {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: { node: WPImage };
  details: VenueDetails;
  provinces: Province[];
  tags: ActivityTag[];
}

export interface Testimonial {
  id: string;
  title: string;
  content: string;
  featuredImage?: WPImage;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: ActivityCategory[];
  featuredImage?: { node: WPImage };
}

export interface SiteContact {
  phone: string;
  phoneHref: string;
  email: string;
  quoteFormId: number;
  newsFormId: number;
}

export interface CityConfig {
  slug: string;
  name: string;
  short: string;
  kicker: string;
  title: string;
  intro: string;
  loveHeading: string;
  loveParagraphs: string[];
  localHeading: string;
  localParagraph: string;
  localActivitySlug: string;
}
