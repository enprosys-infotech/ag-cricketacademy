import { Link } from "react-router-dom";
import { ArrowRight, UserRound } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching team"
        title="Guidance built around the game."
        intro="Experienced coaching staff support players as they develop their skills and competitive ambitions."
      />
      <section className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-3xl border-y border-border py-10 text-center md:py-14">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
            <UserRound className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="eyebrow mt-6">Meet the team</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Coach profiles are being verified.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Names, portraits, qualifications, playing history and areas of expertise will be
            published once confirmed by the academy. We don’t want to guess at anyone’s credentials.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-pitch"
          >
            Contact the academy <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
