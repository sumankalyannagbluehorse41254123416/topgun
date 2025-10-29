"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Helper: strip unwanted HTML tags and spaces
const stripHtml = (html?: string): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "") // remove HTML
    .replace(/&nbsp;/g, " ") // replace &nbsp;
    .replace(/\s+/g, " ") // collapse spaces
    .trim();
};

interface MediaCoverageProps {
  data?: {
    title?: string;
    subsections?: {
      title?: string;
      image?: string;
    }[];
  };
}

export default function MediaCoverageSection({ data }: MediaCoverageProps) {
  const { title = "Media Coverage", subsections = [] } = data || {};

  // ✅ Build dynamic items using database title + image
  const coverages = subsections.map((sub, i) => ({
    title: stripHtml(sub.title || `Media Coverage ${i + 1}`),
    image: sub.image || "/images/default-banner.jpg",
    // 👇 Static fields — can be changed manually anytime
    link:
      [
        "/",
        "https://www.google.com/amp/s/m.timesofindia.com/sports/more-sports/shooting/30-medals-for-topgun-shooting-academy-at-delhi-state-meet/amp_articleshow/88770798.cms",
        "https://www.indiatoday.in/pti-feed/story/topgun-marksmen-dominate-karni-singh-shooting-meet-640038-2016-07-13",
        "https://www.business-standard.com/article/pti-stories/topgun-marksmen-dominate-inter-school-delhi-shooting-meet-115082400977_1.html",
        "https://timesofindia.indiatimes.com/sports/more-sports/shooting/delhis-65-year-old-shooter-sets-national-record/articleshow/56649912.cms",
        "",
        "",
        "",
      ][i] || "",
    source: ["", "TOI", "INDIA TODAY", "BS NEWS", "TOI", "", "", ""][i] || "",
    sourceLogo: [
      "",
      "/images/1674484617152.png",
      "/images/1651215997205.jpg",
      "/images/1651216028123.png",
      "/images/1674483550871.png",
      "",
      "",
      "",
    ][i] || "",
  }));

  return (
    <section className="section-full bg-white content-inner pt-0">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center mb-10">
          <h2 className="h2">{stripHtml(title)}</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
        </div>

        {/* Media Coverage Cards */}
        <div className="section-content text-center">
          <div className="row justify-center">
            {coverages.map((item, index) => (
              <div key={index} className="col-lg-4 col-sm-6 mb-4">
                <div className="dez-box dez-staff border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
                  <div className="dez-media relative overflow-hidden">
                    <Link href={item.link || "#"} target="_blank">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="media-images w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </Link>
                  </div>

                  <div className="dez-media-medal pb-2">
                    <div className="dez-media-text mb-3">
                      <Link
                        href={item.link || "#"}
                        target="_blank"
                        className="font-semibold text-lg text-gray-800 hover:text-primary transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    </div>

                    {item.source && (
                      <div className="dez-media-check text-sm text-gray-600">
                        <p className="flex items-center justify-center gap-2">
                          Read On
                          <Link
                            href={item.link || "#"}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {item.sourceLogo && (
                              <Image
                                src={item.sourceLogo}
                                alt={item.source}
                                width={24}
                                height={24}
                                className="rounded-full object-contain toi"
                                unoptimized
                              />
                            )}
                            {item.source}
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
