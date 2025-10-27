import BranchesBannerSection from "@/components/branches/BranchesBannerSection";
import BranchesSection from "@/components/branches/BranchesSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// ✅ Helper to strip HTML tags
const stripHtml = (html: string): string =>
  html ? html.replace(/<[^>]*>/g, "") : "";

// ✅ Section Type Definitions
interface SubSection {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  bannerImage?: string;
  subsections?: SubSection[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function BranchesPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Fetch Page Data
    siteData = await fetchPageData(
      { host, ...headersObj },
      "a728ee6e-5d3c-47f9-bda2-9b22359d6300"
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  // ✅ Section 12: Branches Banner
  const bannerSection: Section = sections[12] || {};
  const bannerData = {
    title: stripHtml(bannerSection.title || "Branches"),
    image:
      bannerSection.bannerImage ||
      bannerSection.image ||
      "/images/branch-banner.jpg",
  };

  // ✅ Section 13: Branches List Section
  const branchesSection: Section = sections[13] || {};
  const branchesData = {
    title: stripHtml(branchesSection.title || "Our Branches"),
    shortDescription: stripHtml(branchesSection.shortDescription || ""),
    subsections: branchesSection.subsections || [],
  };

  // ✅ Render Page
  return (
    <div className="page-content">
      <BranchesBannerSection data={bannerData} />
      <BranchesSection data={branchesData} />
    </div>
  );
}
