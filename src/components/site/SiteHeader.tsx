import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-night/95 backdrop-blur border-b border-night-foreground/10 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container-site flex items-center justify-between gap-6 text-night-foreground">
        <Link to="/" className="shrink-0" aria-label={site.stadium}>
          <Logo />
        </Link>

        <nav className="hidden 2xl:flex items-center gap-0 text-[0.8rem] font-medium whitespace-nowrap">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1 rounded-md px-2.5 py-2 text-night-foreground/80 hover:text-night-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-56 rounded-xl border border-border bg-card p-2 text-card-foreground shadow-soft">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-2.5 py-2 text-night-foreground/80 hover:text-night-foreground",
                    isActive && "text-gold",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden 2xl:flex items-center gap-2 whitespace-nowrap">
          <Link
            to="/register"
            className="rounded-full border border-night-foreground/30 px-4 py-2 text-sm font-semibold hover:bg-night-foreground/10"
          >
            Register
          </Link>
          <Link
            to="/book"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground hover:brightness-105"
          >
            Book the Ground
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-site-navigation"
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="2xl:hidden rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        id="mobile-site-navigation"
        aria-label="Mobile navigation"
        className={cn(
          "2xl:hidden container-site mt-3 max-h-[80vh] overflow-y-auto pb-6 text-night-foreground",
          !open && "hidden",
        )}
      >
        <ul className="divide-y divide-night-foreground/10">
          {nav
            .flatMap((i) => i.children ?? [i])
            .map((i) => (
              <li key={i.to + i.label}>
                <NavLink
                  to={i.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                      isActive && "text-gold",
                    )
                  }
                >
                  {i.label}
                </NavLink>
              </li>
            ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="rounded-full border border-night-foreground/30 py-3 text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Register
          </Link>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold py-3 text-center font-semibold text-gold-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Book Ground
          </Link>
        </div>
      </nav>
    </header>
  );
}
