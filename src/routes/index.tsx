import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Users, Award, Route as RouteIcon } from "lucide-react";
import hero from "@/assets/hero-stadium.jpg";
import pitch from "@/assets/pitch.jpg";
import academy from "@/assets/academy.jpg";
import pavilion from "@/assets/pavilion.jpg";
import { site, stats, programs } from "@/lib/site";

const statIcons = [Users, Award, RouteIcon];

const venue = [
  { title: "Cricket Ground", img: hero, cls: "md:col-span-2 md:row-span-2" },
  { title: "Pitch Detail", img: pitch, cls: "" },
  { title: "Pavilion (illustrative)", img: pavilion, cls: "" },
  { title: "Training (illustrative)", img: academy, cls: "md:col-span-2" },
];

function Btn({
  to,
  children,
  variant = "gold",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "primary";
}) {
  const styles = {
    gold: "bg-gold text-gold-foreground hover:brightness-105",
    ghost: "border border-night-foreground/35 text-night-foreground hover:bg-night-foreground/10",
    primary: "bg-primary text-primary-foreground hover:bg-pitch",
  }[variant];
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export default function Index() {
  return (
    <>
      {/* A: Hero */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-night text-night-foreground">
        <img
          src={hero}
          alt="Representative cricket ground at sunset"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site pb-24 pt-40">
          <p className="eyebrow animate-rise">{site.location}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-8xl animate-rise [animation-delay:120ms]">
            Where talent meets discipline. Where champions begin.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-night-foreground/80 animate-rise [animation-delay:240ms]">
            Developing confident cricketers through structured coaching, dedicated practice and a
            passion for the game.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:360ms]">
            <Btn to="/register">Join the Academy</Btn>
            <Btn to="/stadium" variant="ghost">
              Explore Our Facilities <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden>
          <div className="h-10 w-6 rounded-full border-2 border-night-foreground/50 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-gold animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* B: Foundation intro */}
      <section className="container-site grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">The Foundation</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-primary md:text-5xl">
            Built for the love of the game.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground">
          <p>
            <strong className="text-foreground">{site.foundation}</strong> stands behind the{" "}
            <strong className="text-foreground">{site.stadium}</strong> — a venue for competitive
            and community cricket.
          </p>
          <p>
            Our mission is simple: encourage cricket, develop talent and give players a ground
            worthy of their ambition.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-semibold text-pitch hover:gap-3 transition-all"
          >
            Read Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* C: Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site grid grid-cols-1 gap-y-10 py-14 min-[400px]:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i] ?? Users;
            return (
              <div
                key={s.label}
                className="flex items-start gap-4 lg:border-l lg:border-primary-foreground/15 lg:pl-8 first:border-0 first:pl-0"
              >
                <Icon className="mt-1 h-6 w-6 text-gold" />
                <div>
                  <div className="font-display text-3xl font-semibold">{s.value}</div>
                  <div className="text-sm text-primary-foreground/70">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* D: Venue */}
      <section className="container-site py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Explore Our Stadium</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-primary md:text-5xl">
              A ground made for cricket.
            </h2>
          </div>
          <Btn to="/gallery" variant="primary">
            Explore Full Gallery <ArrowUpRight className="h-4 w-4" />
          </Btn>
        </div>
        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4">
          {venue.map((v) => (
            <Link
              key={v.title}
              to="/stadium"
              className={`group relative overflow-hidden rounded-2xl ${v.cls}`}
            >
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-night-foreground">
                <span className="font-semibold">{v.title}</span>
                <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Representative images — official stadium photography coming soon.
        </p>
      </section>

      {/* E: Academy */}
      <section className="bg-night text-night-foreground">
        <div className="container-site grid gap-14 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{site.academy}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Training for every stage of the journey.
            </h2>
            <p className="mt-5 text-night-foreground/70">
              Structured programs that build players toward district, state and national
              opportunities. Ask the academy about current program availability, schedules and age
              groups.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/academy" variant="ghost">
                Explore Programs
              </Btn>
              <Btn to="/register">Register Now</Btn>
            </div>
            <img
              src={academy}
              alt="Representative image of a cricket net session"
              loading="lazy"
              className="mt-10 hidden aspect-[5/4] w-full rounded-2xl object-cover lg:block"
            />
          </div>
          <ol className="lg:col-span-7 divide-y divide-night-foreground/10">
            {programs.map((p, i) => (
              <li key={p.name} className="group flex gap-6 py-7">
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-night-foreground/65">{p.desc}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-night-foreground/45">
                    Program details and availability to be confirmed
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-night-foreground/40 transition group-hover:text-gold" />
              </li>
            ))}
          </ol>
          <p className="lg:col-start-6 lg:col-span-7 text-xs text-night-foreground/50">
            Program areas are indicative; confirm current availability and details with the academy.
          </p>
        </div>
      </section>

      {/* F: Coaches */}
      <section className="container-site py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Meet Our Coaches</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-primary md:text-5xl">
              Guided by experience.
            </h2>
          </div>
          <Link to="/coaches" className="inline-flex items-center gap-2 font-semibold text-pitch">
            View All Coaches <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 rounded-2xl border border-border bg-card p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-10">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
            <Users className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary">
              Experienced coaching staff
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Coach names, portraits and verified qualifications will be added once confirmed by the
              academy.
            </p>
          </div>
          <Link to="/coaches" className="inline-flex items-center gap-2 font-semibold text-pitch">
            Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* G + I: Events & Media */}
      <section className="bg-secondary">
        <div className="container-site grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="eyebrow">Matches & Events</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-primary">
              On the fixture list.
            </h2>
            <div className="mt-8 rounded-2xl bg-card p-8 shadow-soft">
              <p className="font-semibold">No confirmed events published yet.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Inter-club, friendly, corporate and academy matches will appear here once confirmed.
              </p>
              <Link
                to="/events"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pitch"
              >
                See all events <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">News & Media</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-primary">
              Latest from the ground.
            </h2>
            <div className="mt-8 rounded-2xl bg-card p-8 shadow-soft">
              <p className="font-semibold">Updates coming soon.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Academy announcements, notices and highlights will be shared here.
              </p>
              <Link
                to="/media"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pitch"
              >
                View All Media <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* J: CTA */}
      <section className="relative isolate overflow-hidden bg-night text-night-foreground">
        <img
          src={pitch}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="container-site py-28 text-center">
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Your Cricket Journey Starts Here.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Btn to="/register">Join Our Academy</Btn>
            <Btn to="/book" variant="ghost">
              Reserve the Stadium
            </Btn>
            <Btn to="/contact" variant="ghost">
              Contact Our Team
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
