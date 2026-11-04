import { type RouteObject } from "react-router-dom";
import { AppLayout, NotFoundPage } from "@/components/site/AppRouteShell";
import AboutPage from "@/routes/about";
import AcademyPage from "@/routes/academy";
import BookPage from "@/routes/book";
import BookingPolicyPage from "@/routes/booking-policy";
import CoachesPage from "@/routes/coaches";
import ContactPage from "@/routes/contact";
import EventsPage from "@/routes/events";
import FounderPage from "@/routes/founder";
import GalleryPage from "@/routes/gallery";
import HomePage from "@/routes";
import LeadershipPage from "@/routes/leadership";
import MediaPage from "@/routes/media";
import MissionPage from "@/routes/mission";
import PrivacyPage from "@/routes/privacy";
import RegisterPage from "@/routes/register";
import StadiumPage from "@/routes/stadium";
import TermsPage from "@/routes/terms";

export const appRoutes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "academy", element: <AcademyPage /> },
      { path: "book", element: <BookPage /> },
      { path: "booking-policy", element: <BookingPolicyPage /> },
      { path: "coaches", element: <CoachesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "founder", element: <FounderPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "leadership", element: <LeadershipPage /> },
      { path: "media", element: <MediaPage /> },
      { path: "mission", element: <MissionPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "stadium", element: <StadiumPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
