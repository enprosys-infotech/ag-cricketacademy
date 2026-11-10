import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fixtures"
        title="Matches & Events"
        intro="Upcoming and recent cricket at the stadium."
      />
      <section className="container-site py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 border-y border-border py-9 md:grid-cols-[minmax(12rem,0.7fr)_1.3fr] md:gap-16 md:py-12">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center border border-border bg-secondary text-primary">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow text-pitch">Fixture list</p>
              <p className="mt-1 text-sm font-semibold text-foreground">No confirmed dates</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              No confirmed events published yet.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Match and event details will be listed here once dates and information are confirmed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/stadium"
                className="inline-flex min-h-11 items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore the stadium <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/book"
                className="inline-flex min-h-11 items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Ground booking information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
