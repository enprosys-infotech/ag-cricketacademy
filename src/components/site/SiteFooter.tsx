import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4 space-y-4">
          <Logo />
          <p className="text-sm text-night-foreground/65 max-w-sm">
            {site.foundation} — encouraging cricket, developing talent and providing a venue for
            competitive and community cricket in Indore.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-night-foreground/75">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="eyebrow mb-4">Get Started</h4>
          <ul className="space-y-2 text-sm text-night-foreground/75">
            <li>
              <Link to="/register" className="hover:text-gold">
                Academy Registration
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-gold">
                Ground Booking
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gold">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/booking-policy" className="hover:text-gold">
                Booking & Cancellation
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-night-foreground/75">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold" />
              {site.location}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />
              {site.phone || "Phone to be announced"}
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />
              {site.email || "Email to be announced"}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-night-foreground/10">
        <div className="container-site py-6 text-xs text-night-foreground/50">
          © {new Date().getFullYear()} {site.foundation}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
