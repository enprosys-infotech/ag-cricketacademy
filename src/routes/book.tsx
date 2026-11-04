import { PageStub } from "@/components/site/PageStub";

export default function BookPage() {
  return (
    <PageStub
      eyebrow="Venue"
      title="Book the Ground"
      intro="Reserve the stadium for your match or event."
      statusTitle="Online reservations are not available yet."
      status="Booking details and a confirmed reservation process will be published here when they are available."
      actions={[
        { to: "/contact", label: "View contact information", primary: true },
        { to: "/booking-policy", label: "Booking policy" },
      ]}
    />
  );
}
