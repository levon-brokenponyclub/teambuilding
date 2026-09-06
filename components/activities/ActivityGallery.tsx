import { Activity } from "@/lib/types";

interface ActivityGalleryProps {
  activity: Activity;
}

export function ActivityGallery({ activity }: ActivityGalleryProps) {
  const images = activity.details?.gallery?.nodes || [];

  if (images.length === 0) return null;

  return (
    <section className="activity-gallery">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="h2 text-3xl sm:text-4xl font-extrabold text-navy mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden bg-bg-soft">
              <img
                src={img.sourceUrl}
                alt={img.altText}
                width={800}
                height={800}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
