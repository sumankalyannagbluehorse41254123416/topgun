import GalleryBannerSection from "@/components/gallery/GalleryBannerSection";
// import FilterSection from "@/components/gallery/FilterSection";
import GallerySection from "@/components/gallery/GallerySection";
export default function GalleryPage() {
  return (
    <>

    <div className="page-content">
      <GalleryBannerSection />
      {/* <FilterSection /> */}
      <GallerySection />
      {/* Your gallery images section will go here */}
      </div>
    </>
  );
}
