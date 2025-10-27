import ClassesBannerSection from "@/components/classes/ClassesBannerSection";
import ClassesRulesSection from "@/components/classes/ClassesRulesSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper to strip HTML safely
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// Define types
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

export default async function ClassesPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // 🔹 Replace UUID with your Classes Page ID from CMS
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

  // ✅ Section 1: Banner Section (index 14)
  const bannerSection = sections[14] || {};
  const bannerData = {
    title: stripHtml(bannerSection.title || "Classes"),
    imageUrl:
      bannerSection.image ||
      bannerSection.bannerImage ||
      "/images/default-banner.jpg",
  };

  // ✅ Section 2: Rules Section (index 15)
  const rulesSection = sections[15] || null;

  return (
    <div className="page-content">
      {/* Banner */}
      <ClassesBannerSection data={bannerData} />

      {/* Rules Section — data comes directly from CMS */}
      {rulesSection && <ClassesRulesSection data={rulesSection} />}
    </div>
  );
}
