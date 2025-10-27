import ContactBannerSection from "@/components/contact/ContactBannerSection";
import ContactSection from "@/components/contact/ContactSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper to safely remove HTML tags
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

export default async function ContactPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // 🔹 Replace UUID with your Contact Page ID from CMS
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

  // ✅ Section 1: Banner Section
  const bannerSection = sections[21] || {};
  const bannerData = {
    title: stripHtml(bannerSection.title || "Contact Us"),
    imageUrl:
      bannerSection.image ||
      bannerSection.bannerImage ||
      "/images/contact-banner.jpg",
  };

  // ✅ Section 2: Contact Section
  // const contactSection = sections[1] || null;

  return (
    <div className="page-content">
      {/* Banner Section */}
      <ContactBannerSection data={bannerData} />

      <ContactSection />
    </div>
  );
}
