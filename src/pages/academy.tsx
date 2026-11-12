import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import academy from "@/assets/academy.jpg";
import { PageHero } from "@/components/site/PageHero";
import { programs, site } from "@/lib/site";

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cricket academy"
        title="Train with purpose."
        intro={`${site.academy} welcomes players working toward district, state and national-level cricket.`}
      />
      <section className="container-site grid gap-10 py-16 md:grid-cols-5 md:gap-14 md:py-24">
        <div className="md:col-span-2">
          <img
            src={academy}
            alt="Representative image of cricket practice in a net lane"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Representative image; confirm program availability with the academy.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Development pathways</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Find your next step in the game.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            The program areas below describe the academy’s intended development focus. Please
            confirm current sessions, age groups, schedules and fees directly before enrolling.
          </p>
          <ul className="mt-8 divide-y divide-border">
            {programs.map((program) => (
              <li key={program.name} className="flex gap-4 py-5">
                <Check className="mt-1 h-5 w-5 shrink-0 text-pitch" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-foreground">{program.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{program.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Ask about joining <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
