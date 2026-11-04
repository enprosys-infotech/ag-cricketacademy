import { Link } from "react-router-dom";
import { ArrowRight, Target, UsersRound, Trophy } from "lucide-react";
import academy from "@/assets/academy.jpg";
import { PageHero } from "@/components/site/PageHero";
import { site, stats } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the foundation"
        title="A home for the next generation of cricket."
        intro={`${site.foundation} supports cricket and player development in Indore through the ${site.academy}.`}
      />
      <section className="container-site grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
        <div className="relative">
          <img
            src={academy}
            alt="Representative image of young cricketers practising in a net lane"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Representative image; not a verified academy photograph.
          </p>
        </div>
        <div>
          <p className="eyebrow">Purpose & approach</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Skill, discipline and room to grow.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            The foundation’s focus is to encourage participation in cricket, support the development
            of young talent and provide a place for competitive and community cricket.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            At the academy, players train with the ambition to progress through district, state and
            national levels. Individual stories, verified milestones and coach profiles will be
            shared here as they are approved.
          </p>
          <Link
            to="/academy"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-pitch hover:gap-3"
          >
            Discover the academy <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container-site grid gap-6 py-14 sm:grid-cols-3 md:py-16">
          {[
            { icon: UsersRound, title: stats[0].value, text: stats[0].label },
            {
              icon: Target,
              title: "Player development",
              text: "A focus on learning and discipline",
            },
            {
              icon: Trophy,
              title: "Cricket pathways",
              text: "District, state and national aspirations",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-l-2 border-gold pl-5">
              <Icon className="h-5 w-5 text-pitch" aria-hidden="true" />
              <h3 className="mt-3 font-display text-2xl font-semibold text-primary">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
