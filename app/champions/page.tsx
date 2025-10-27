import ChampionsBannerSection from "@/components/champions/ChampionsBannerSection";
import ChampionsContentSection from "@/components/champions/ChampionsContentSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper to safely strip HTML tags & decode entities
const stripHtml = (html: string): string => {
  if (!html) return "";
  const noTags = html.replace(/<[^>]*>/g, "");
  // Decode basic HTML entities like &nbsp; and &amp;
  return noTags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
};

// === Type Definitions ===
interface SubSection {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function OurChampionsPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Replace UUID with your actual Champions Page ID from CMS
    siteData = await fetchPageData(
      { host, ...headersObj },
      "a728ee6e-5d3c-47f9-bda2-9b22359d6300"
    );
  } catch (error) {
    console.error("❌ Fetch error in OurChampionsPage:", error);
  }

  // ✅ Extract sections from CMS
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ Section 1: Banner (adjust index based on your CMS)
  const bannerSection = sections[16] || {};
  const bannerData = {
    title: bannerSection.title || "Our Champions",
    imageUrl:
      bannerSection.image ||
      bannerSection.bannerImage ||
      "/images/champ-banner.jpg",
  };

  const leftContent = sections[17] || {};
  const rightContent = sections[18] || {};

  return (
    <div className="page-content">
      {/* === Banner Section === */}
      <ChampionsBannerSection data={bannerData} />

      {/* === Champions Content Section === */}
      <ChampionsContentSection
        leftData={leftContent}
        rightData={rightContent}
      />
    </div>
  );
}
