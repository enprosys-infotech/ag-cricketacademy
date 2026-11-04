import { GalleryExperience } from "@/components/site/GalleryExperience";
import { PageHero } from "@/components/site/PageHero";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The game, in every frame."
        intro="Explore representative cricket, training and stadium imagery while the official academy photo collection is being prepared."
      />
      <GalleryExperience />
    </>
  );
}
