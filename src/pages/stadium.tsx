import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import hero from "@/assets/hero-stadium.jpg";
import pavilion from "@/assets/pavilion.jpg";
import pitch from "@/assets/pitch.jpg";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export default function StadiumPage() {
  return (
    <>
      <PageHero eyebrow="The venue" title="A place for cricket to grow." intro={site.stadium} />
      <section className="container-site py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Neena Vinod Agarwal Cricket Stadium</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
              Cricket in the heart of Indore.
            </h2>
          </div>
          <p className="flex gap-2 pb-1 text-sm text-muted-foreground md:col-span-5 md:justify-end">
            <MapPin className="h-5 w-5 shrink-0 text-pitch" aria-hidden="true" />
            {site.location}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-12 md:auto-rows-[220px]">
          <figure className="overflow-hidden rounded-2xl md:col-span-7 md:row-span-2">
            <img
              src={hero}
              alt="Representative cricket ground with a central pitch at sunset"
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
            <figcaption className="sr-only">Representative cricket ground imagery</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl md:col-span-5">
            <img
              src={pitch}
              alt="Representative close-up of cricket stumps on a pitch"
              loading="lazy"
              className="h-full min-h-48 w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl md:col-span-5">
            <img
              src={pavilion}
              alt="Representative pavilion building beside a cricket field"
              loading="lazy"
              className="h-full min-h-48 w-full object-cover"
            />
          </figure>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Images are illustrative and are not verified photographs of the stadium or its facilities.
          Ground access, facilities and booking details should be confirmed directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Ground booking information <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Explore gallery
          </Link>
        </div>
      </section>
    </>
  );
}
