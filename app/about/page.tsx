import AboutBanner from "@/components/about/AboutBanner";
import TopgunAboutSection from "@/components/about/TopgunAboutSection";
import FounderSection from "@/components/about/FounderSection";
import CoachingTeamSection from "@/components/about/CoachingTeamSection";
import TestimonialSection from "@/components/about/TestimonialSection";

import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// ✅ Helper: safely strip HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Define CMS data interfaces
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
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

export default async function AboutPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Fetch About Page data from your CMS using its unique UUID
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

  // ✅ Section 7: About Banner
  const aboutBannerSection = sections[7] || {};
  const aboutBannerData = {
    title: stripHtml(aboutBannerSection.title || "About Us"),
    shortDescription: stripHtml(aboutBannerSection.shortDescription || ""),
    image:
      aboutBannerSection.bannerImage ||
      aboutBannerSection.image ||
      "/images/default-banner.jpg",
  };

  // ✅ Section 8: Topgun About Section
  const topgunAboutSection = sections[8] || {};
  const topgunAboutData = {
    title: stripHtml(topgunAboutSection.title || "TOPGUN SHOOTING ACADEMY"),
    shortDescription: stripHtml(topgunAboutSection.shortDescription || ""),
    image: topgunAboutSection.image || "/images/1649670121050.png",
    subsections: topgunAboutSection.subsections || [],
  };

  // ✅ Section 9: Founder Section (Your dynamic section)
  const founderSection = sections[9] || {};
  const founderData = {
    title: stripHtml(founderSection.title || "About Founder"),
    shortDescription: founderSection.shortDescription || "",
    image: founderSection.image || "/images/founder.jpg",
    subsections: founderSection.subsections || [],
  };

  // ✅ Section 10: Coaching Team Section (optional if available)
  // const coachingTeamSection = sections[10] || {};
  // const coachingTeamData = {
  //   title: stripHtml(coachingTeamSection.title || "Coaching Team"),
  //   subsections: coachingTeamSection.subsections || [],
  // };

  // ✅ Section 11: Testimonial Section (optional)
  // const testimonialSection = sections[11] || {};
  // const testimonialData = {
  //   title: stripHtml(testimonialSection.title || "Testimonials"),
  //   subsections: testimonialSection.subsections || [],
  // };

  return (
    <div className="page-content">
      <AboutBanner data={aboutBannerData} />
      <TopgunAboutSection data={topgunAboutData} />
      <FounderSection section={founderData} />
      <CoachingTeamSection/>
      <TestimonialSection />
    </div>
  );
}
