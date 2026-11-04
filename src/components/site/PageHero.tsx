import { useEffect } from "react";
import hero from "@/assets/hero-stadium.jpg";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  useEffect(() => {
    document.title = `${title} | ${site.stadium}, Indore`;
  }, [title]);

  return (
    <section className="relative isolate flex min-h-[54vh] items-end overflow-hidden bg-night text-night-foreground md:min-h-[60vh]">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/45 via-night/10 to-transparent" />
      <div className="container-site pb-14 pt-36 animate-rise md:pb-20">
        <p className="eyebrow inline-flex items-center gap-3">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-night-foreground/80 md:text-lg md:leading-8">
          {intro}
        </p>
      </div>
    </section>
  );
}
