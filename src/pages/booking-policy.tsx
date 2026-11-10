import { PageStub } from "@/components/site/PageStub";

export default function BookingPolicyPage() {
  return (
    <PageStub
      eyebrow="Policy"
      title="Booking & Cancellation Policy"
      intro="Rules for ground reservations and cancellations."
      statusTitle="The booking policy has not been published yet."
      status="Please review the confirmed booking and cancellation terms here before making a reservation."
      actions={[{ to: "/book", label: "Ground booking information", primary: true }]}
    />
  );
}
