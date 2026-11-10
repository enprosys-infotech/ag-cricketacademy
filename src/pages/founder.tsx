import { PageStub } from "@/components/site/PageStub";

export default function FounderPage() {
  return (
    <PageStub
      eyebrow="About"
      title="Founder"
      intro="The vision that built a home for cricket in Indore."
      statusTitle="A verified founder profile is not available yet."
      status="Biography and background will be shared here once approved for publication."
      actions={[{ to: "/about", label: "About the foundation", primary: true }]}
    />
  );
}
