import { type RouteObject } from "react-router-dom";
import { AppLayout, NotFoundPage } from "@/components/site/AppRouteShell";
import AboutPage from "@/pages/about";
import AcademyPage from "@/pages/academy";
import BookPage from "@/pages/book";
import BookingPolicyPage from "@/pages/booking-policy";
import CoachesPage from "@/pages/coaches";
import ContactPage from "@/pages/contact";
import EventsPage from "@/pages/events";
import FounderPage from "@/pages/founder";
import GalleryPage from "@/pages/gallery";
import HomePage from "@/pages";
import LeadershipPage from "@/pages/leadership";
import MediaPage from "@/pages/media";
import MissionPage from "@/pages/mission";
import PrivacyPage from "@/pages/privacy";
import RegisterPage from "@/pages/register";
import StadiumPage from "@/pages/stadium";
import TermsPage from "@/pages/terms";

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
