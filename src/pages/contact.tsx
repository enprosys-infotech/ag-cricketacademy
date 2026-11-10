import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk cricket."
        intro="Find the academy and stadium in Indore. Verified contact details will be published here when available."
      />
      <section className="container-site py-14 md:py-20">
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          <div className="border-t-2 border-gold bg-card p-6">
            <MapPin className="h-5 w-5 text-pitch" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-primary">Location</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{site.location}</p>
          </div>
          <div className="border-t-2 border-gold bg-card p-6">
            <Phone className="h-5 w-5 text-pitch" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-primary">Phone</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {site.phone || "Verified phone number to be announced."}
            </p>
          </div>
          <div className="border-t-2 border-gold bg-card p-6">
            <Mail className="h-5 w-5 text-pitch" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-primary">Email</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {site.email || "Verified email address to be announced."}
            </p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
          We haven’t enabled an enquiry form because no working submission service or verified
          contact address is configured yet. No message would be delivered if a form were shown.
        </p>
      </section>
    </>
  );
}
