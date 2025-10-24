import HomeTopSection from "@/components/HomeTopSection";
import AboutSection from "@/components/AboutSection";
import OurProjectsGallery from "@/components/OurProjectsGallery";
import BranchesSection from "@/components/BranchesSection";
import GallerySection from "@/components/GallerySection";
import OurShootingStars from "@/components/OurShootingStars";
import MediaCoverageSection from "@/components/MediaCoverageSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper: remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Define a lightweight type for your CMS structure
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: any; // allows flexible extra fields safely
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Home() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "a728ee6e-5d3c-47f9-bda2-9b22359d6300"
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ HomeTopSection data (first section)
  const homeTop = sections[0] || {};
  const homeTopData = {
    title: stripHtml(homeTop.title || ""),
    shortDescription: stripHtml(homeTop.shortDescription || ""),
    imageUrl:
      homeTop.image || homeTop.bannerImage || "/images/default-banner.jpg",
  };

  // ✅ AboutSection data (index 1)
  const aboutSection = sections[1] || {};
  const aboutSectionData = {
    title: stripHtml(aboutSection.title || ""),
    shortDescription: stripHtml(aboutSection.shortDescription || ""),
    imageUrl: aboutSection.image || "/images/1709644852988.jpeg",
    subsections: aboutSection.subsections || [],
  };

  return (
    <div className="page-content">
      <HomeTopSection data={homeTopData} />
      <AboutSection data={aboutSectionData} />
      <OurProjectsGallery />
      <BranchesSection />
      <GallerySection />
      <OurShootingStars />
      <MediaCoverageSection />
    </div>
  );
}
