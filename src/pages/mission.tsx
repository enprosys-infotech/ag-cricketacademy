import { Link } from "react-router-dom";
import { ArrowRight, Flag, Sprout, UsersRound } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site, stats } from "@/lib/site";

const priorities = [
  {
    icon: Flag,
    title: "Encourage cricket",
    description: "Support participation in the game across competitive and community settings.",
  },
  {
    icon: Sprout,
    title: "Develop talent",
    description: `Help players build skills as they pursue ${stats[2].label.toLowerCase()} cricket.`,
  },
  {
    icon: UsersRound,
    title: "Make room to play",
    description:
      "Provide a place for players and the local community to come together around cricket.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        title="Cricket, opportunity and growth."
        intro={`${site.foundation} supports cricket participation, player development and a place for competitive and community cricket in Indore.`}
      />
      <section className="container-site py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="eyebrow">Our purpose</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-primary md:text-4xl">
              A steady path for the game to grow.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {priorities.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="grid gap-4 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6">
                  <span
                    className="font-display text-xl font-semibold text-pitch"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <div className="flex gap-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
                      <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Link
              to="/academy"
              className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:text-pitch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore academy development <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
