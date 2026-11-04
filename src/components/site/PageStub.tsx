import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import { PageHero } from "./PageHero";

type PageStubAction = {
  to: string;
  label: string;
  primary?: boolean;
};

export function PageStub({
  eyebrow,
  title,
  intro,
  statusTitle = "More information is on its way.",
  status = "This page is being prepared. Confirmed details will be published here when available.",
  actions = [{ to: "/", label: "Back to home", primary: true }],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  statusTitle?: string;
  status?: string;
  actions?: PageStubAction[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="container-site py-14 md:py-20">
        <div className="mx-auto max-w-5xl border-y border-border">
          <div className="grid gap-8 py-9 md:grid-cols-[minmax(12rem,0.7fr)_1.3fr] md:gap-16 md:py-12">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-border bg-secondary text-primary">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow text-pitch">Page status</p>
                <p className="mt-1 text-sm font-semibold text-foreground">In preparation</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
                {statusTitle}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{status}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Link
                    key={action.to}
                    to={action.to}
                    className={
                      action.primary
                        ? "inline-flex min-h-11 items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        : "inline-flex min-h-11 items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    }
                  >
                    {action.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
