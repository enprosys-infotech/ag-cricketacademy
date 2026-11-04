import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ImageOff } from "lucide-react";
import academy from "@/assets/academy.jpg";
import hero from "@/assets/hero-stadium.jpg";
import pavilion from "@/assets/pavilion.jpg";
import pitch from "@/assets/pitch.jpg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const categories = [
  "All photos",
  "Training",
  "Stadium",
  "Matches",
  "Coaches",
  "Events",
  "Achievements",
] as const;
type GalleryCategory = (typeof categories)[number];

const photos: {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "All photos">;
  shape: string;
}[] = [
  {
    src: academy,
    alt: "Cricketers practising batting in a net lane",
    caption: "A training session",
    category: "Training",
    shape: "md:row-span-2",
  },
  {
    src: hero,
    alt: "Cricket ground and pavilion in evening light",
    caption: "The ground",
    category: "Stadium",
    shape: "",
  },
  {
    src: pitch,
    alt: "Cricket stumps on a prepared pitch",
    caption: "Pitch detail",
    category: "Stadium",
    shape: "",
  },
  {
    src: pavilion,
    alt: "Pavilion building beside a cricket field",
    caption: "Pavilion view",
    category: "Stadium",
    shape: "md:col-span-2",
  },
];

export function GalleryExperience() {
  const [category, setCategory] = useState<GalleryCategory>("All photos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visiblePhotos =
    category === "All photos" ? photos : photos.filter((photo) => photo.category === category);
  const selectedPhoto = selectedIndex === null ? undefined : visiblePhotos[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null || visiblePhotos.length < 2) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setSelectedIndex((index) => (index === null ? null : (index + 1) % visiblePhotos.length));
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, visiblePhotos.length]);

  return (
    <>
      <section className="container-site py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">From the ground</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
              A closer look at cricket.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground">
            These are representative images, not verified photographs of the academy or its players.
            Official gallery images will be added when available.
          </p>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          aria-label="Filter gallery by category"
          role="group"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setSelectedIndex(null);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {visiblePhotos.length > 0 ? (
          <div className="mt-6 grid auto-rows-[210px] gap-3 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-3">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo.caption}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative isolate overflow-hidden rounded-xl bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ${photo.shape}`}
                aria-label={`Open image: ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-night-foreground">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      {photo.category}
                    </span>
                    <span className="mt-1 block font-semibold">{photo.caption}</span>
                  </span>
                  <span aria-hidden="true" className="text-sm font-medium opacity-80">
                    View
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
            <ImageOff className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
              No {category === "Matches" ? "match" : category.toLowerCase()} photos yet
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Verified academy photos for this category will appear here when available.
            </p>
          </div>
        )}
      </section>

      <Dialog
        open={selectedPhoto !== undefined}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        {selectedPhoto && (
          <DialogContent className="max-h-[94vh] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto border-0 bg-night p-4 text-night-foreground sm:p-6">
            <DialogTitle className="pr-10 font-display text-2xl">
              {selectedPhoto.caption}
            </DialogTitle>
            <DialogDescription className="text-night-foreground/70">
              {selectedPhoto.alt}. Representative image.
            </DialogDescription>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[68vh] w-full rounded-lg object-contain"
            />
            {visiblePhotos.length > 1 && selectedIndex !== null && (
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + visiblePhotos.length) % visiblePhotos.length,
                    )
                  }
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-night-foreground/25 px-4 text-sm font-semibold hover:bg-night-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>
                <span className="text-sm text-night-foreground/70">
                  {selectedIndex + 1} / {visiblePhotos.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % visiblePhotos.length)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-night-foreground/25 px-4 text-sm font-semibold hover:bg-night-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Next image"
                >
                  Next
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
