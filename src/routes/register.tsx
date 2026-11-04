import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Academy enrolment"
        title="Start your cricket journey."
        intro="The academy is preparing its enrolment process and current program details."
      />
      <section className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-3xl border-y border-border py-10 text-center md:py-14">
          <p className="eyebrow">Enrolment update</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Online registration is not open yet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            We’re not collecting personal details on this page. Training availability, age groups,
            schedules, fees and verified enquiry contacts will be shared once confirmed.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore the academy <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 font-semibold text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
