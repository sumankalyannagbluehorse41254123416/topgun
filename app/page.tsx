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
  console.log(siteData);

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

   // ✅ Section 2: Our Projects Gallery
  const projectsSection = sections[2] || {};
  const projectsData = {
    image: projectsSection.image || "/images/top.jpg",
    subsections: projectsSection.subsections || [],
  };

  // ✅ Section 3: Branches Section
const branchesSection = sections[3] || {};
const branchesData = {
  title: stripHtml(branchesSection.title || "Branches"),
  image: branchesSection.image || "/images/topgunlogo.png", // section main image (logo)
  subsections: branchesSection.subsections || [], // list of branches
};

// ✅ Section 4: Gallery Section
const gallerySection = sections[4] || {};
const galleryData = {
  title: stripHtml(gallerySection.title || "Gallery"),
  image: gallerySection.image || "/images/topgun.jpg", // background image
  subsections: gallerySection.subsections || [], // each has an image
};

// ✅ Section 5: Our Shooting Stars
const starsSection = sections[5] || {};
const starsData = {
  title: stripHtml(starsSection.title || "Our Shooting Stars"),
  subsections: starsSection.subsections || [], // each has title, description, image
};

// ✅ Section 6: Media Coverage Section
const mediaCoverageSection = sections[6] || {};
const mediaCoverageData = {
  title: stripHtml(mediaCoverageSection.title || "Media Coverage"),
  subsections: mediaCoverageSection.subsections || [], // title & image come from these
};

  return (
    <div className="page-content">
      <HomeTopSection data={homeTopData} />
      <AboutSection data={aboutSectionData} />
      <OurProjectsGallery data={projectsData} />
      <BranchesSection data={branchesData} />
      <GallerySection data={galleryData} />
      <OurShootingStars data={starsData} />
      <MediaCoverageSection data={mediaCoverageData} />
    </div>
  );
}
