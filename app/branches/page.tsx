import BranchesBannerSection from "@/components/branches/BranchesBannerSection";
import BranchesSection from "@/components/branches/BranchesSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: any;
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

  // ✅ Section 12: Branches Banner Section
  const bannerSection = sections[12] || {};
  const bannerData = {
    title: stripHtml(bannerSection.title || "Branches"),
    image:
      bannerSection.bannerImage ||
      bannerSection.image ||
      "/images/branch-banner.jpg",
  };

  // ✅ Section 13: Branches List Section
  // const branchesSection = sections[13] || {};
  // const branchesData = {
  //   title: stripHtml(branchesSection.title || "Our Branches"),
  //   shortDescription: stripHtml(branchesSection.shortDescription || ""),
  //   subsections: branchesSection.subsections || [],
  // };

  return (
    <div className="page-content">
      <BranchesBannerSection data={bannerData} />
      {/* <BranchesSection data={branchesData} /> */}
    </div>
  );
}
