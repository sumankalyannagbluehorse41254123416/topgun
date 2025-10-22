import AboutSection from "@/components/AboutSection ";
import HomeTopSection from "@/components/HomeTopSection";
import OurProjectsGallery from "@/components/OurProjectsGallery";
import BranchesSection from "@/components/BranchesSection";
import GallerySection from "@/components/GallerySection";
import OurShootingStars from "@/components/OurShootingStars";
import MediaCoverageSection from "@/components/MediaCoverageSection";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <HomeTopSection />
        <AboutSection />
        <OurProjectsGallery />
        <BranchesSection />
        <GallerySection />
        <OurShootingStars />
        <MediaCoverageSection />
      </div>
    </>
  );
}
