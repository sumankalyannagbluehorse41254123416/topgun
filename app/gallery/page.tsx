import GalleryBannerSection from "@/components/gallery/GalleryBannerSection";
import GallerySection from "@/components/gallery/GallerySection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// ✅ Safely remove HTML tags and &nbsp;
const stripHtml = (html: string) =>
  html ? html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim() : "";

// ✅ Define types
interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function GalleryPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // 🔹 Fetch page data using your CMS page ID
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

  // ✅ Section 19 → Banner Section
  const bannerSection = sections[19] || {};
  const bannerData = {
    title: stripHtml(bannerSection.title || "Gallery"),
    imageUrl:
      bannerSection.image ||
      bannerSection.bannerImage ||
      "/images/default-banner.jpg",
  };

  // ✅ Section 20 → Gallery Section
  const gallerySection = sections[20] || {};
  const galleryData = {
    subsections: gallerySection.subsections || [],
  };

  return (
    <div className="page-content">
      {/* === Dynamic Banner Section === */}
      <GalleryBannerSection data={bannerData} />

      {/* === Dynamic Gallery Section === */}
      <GallerySection data={galleryData} />
    </div>
  );
}
