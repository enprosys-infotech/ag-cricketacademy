import { PageStub } from "@/components/site/PageStub";

export default function MediaPage() {
  return (
    <PageStub
      eyebrow="Media"
      title="News & Media"
      intro="Announcements, updates and highlights."
      statusTitle="No official updates have been published yet."
      status="Verified announcements and stadium or academy news will appear here when available."
      actions={[
        { to: "/events", label: "Matches & events", primary: true },
        { to: "/gallery", label: "Explore gallery" },
      ]}
    />
  );
}
