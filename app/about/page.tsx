import AboutBanner from "@/components/about/AboutBanner";
import TopgunAboutSection from "@/components/about/TopgunAboutSection";
import FounderSection from "@/components/about/FounderSection";
import CoachingTeamSection from "@/components/about/CoachingTeamSection";
// import TestimonialSection from "@/components/about/TestimonialSection";

import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper: strip HTML tags safely
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
    // Replace this UUID with your About Page ID from the CMS
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

  // ✅ Section 0: About Banner
  const aboutBannerSection = sections[7] || {};
  const aboutBannerData = {
    title: stripHtml(aboutBannerSection.title || "About Us"),
    shortDescription: stripHtml(aboutBannerSection.shortDescription || ""),
    image:
      aboutBannerSection.bannerImage ||
      aboutBannerSection.image ||
      "/images/default-banner.jpg",
  };

  // ✅ Section 1: Topgun About Section
  // const topgunAboutSection = sections[1] || {};
  // const topgunAboutData = {
  //   title: stripHtml(topgunAboutSection.title || ""),
  //   shortDescription: stripHtml(topgunAboutSection.shortDescription || ""),
  //   description: stripHtml(topgunAboutSection.description || ""),
  //   image: topgunAboutSection.image || "/images/about-default.jpg",
  // };

  // ✅ Section 2: Founder Section
  // const founderSection = sections[2] || {};
  // const founderData = {
  //   title: stripHtml(founderSection.title || "Founder"),
  //   description: stripHtml(founderSection.description || ""),
  //   image: founderSection.image || "/images/founder.jpg",
  //   subsections: founderSection.subsections || [],
  // };

  // ✅ Section 3: Coaching Team Section
  // const coachingTeamSection = sections[3] || {};
  // const coachingTeamData = {
  //   title: stripHtml(coachingTeamSection.title || "Coaching Team"),
  //   subsections: coachingTeamSection.subsections || [],
  // };

  // ✅ Optional: Testimonial Section (if you enable later)
  // const testimonialSection = sections[4] || {};
  // const testimonialData = {
  //   title: stripHtml(testimonialSection.title || "Testimonials"),
  //   subsections: testimonialSection.subsections || [],
  // };

  return (
    <div className="page-content">
      <AboutBanner data={aboutBannerData} />
      <TopgunAboutSection/>
      <FounderSection/>
      <CoachingTeamSection/>
      {/* <TestimonialSection data={testimonialData} /> */}
    </div>
  );
}
