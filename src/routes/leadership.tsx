import { PageStub } from "@/components/site/PageStub";

export default function LeadershipPage() {
  return (
    <PageStub
      eyebrow="About"
      title="Leadership"
      intro="The team guiding the foundation, stadium and academy."
      statusTitle="Leadership details are being confirmed."
      status="Names, roles and profiles will be published here after the information is verified."
      actions={[{ to: "/about", label: "About the foundation", primary: true }]}
    />
  );
}
