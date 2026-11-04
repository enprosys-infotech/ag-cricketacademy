// Editable brand & content configuration. Phase 4 will move this into the admin portal.
export const site = {
  foundation: "Rala Mandal / Ramesh Bhatia Cricket Foundation",
  stadium: "Neena Vinod Agarwal Cricket Stadium",
  academy: "Neena Vinod Agarwal Cricket Academy",
  shortName: "NVA Stadium",
  location: "Indore, Madhya Pradesh, India",
  phone: "", // set the real business number to enable phone/WhatsApp links
  email: "",
  socials: [] as { label: string; href: string }[],
  groundSize: { value: "~65 m", label: "Ground (to be confirmed)" },
};

export const stats = [
  { value: "60+", label: "Students in training" },
  { value: "Experienced", label: "Coaching staff" },
  { value: "3 levels", label: "District, state & national pathways" },
];

export const programs = [
  { name: "Junior Development", desc: "Cricket fundamentals and confidence for young players." },
  { name: "Skill Development", desc: "Practice across batting, bowling and fielding." },
  { name: "Competitive Preparation", desc: "Development for players with competitive ambitions." },
  { name: "Fitness & Fielding", desc: "Movement, athleticism and fielding fundamentals." },
  { name: "Trial Preparation", desc: "Preparation for district, state and national pathways." },
];

export type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

export const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "About the Foundation" },
      { to: "/founder", label: "Founder" },
      { to: "/leadership", label: "Leadership" },
      { to: "/mission", label: "Mission & Vision" },
    ],
  },
  { to: "/stadium", label: "Stadium & Facilities" },
  { to: "/academy", label: "Cricket Academy" },
  { to: "/coaches", label: "Coaches" },
  { to: "/gallery", label: "Explore Gallery" },
  { to: "/events", label: "Matches & Events" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];
