"use client";

import Image from "next/image";

// Utility to safely remove HTML tags
// Helper: remove HTML tags and decode HTML entities
const stripHtml = (html: string) => {
  if (!html) return "";
  // Remove all HTML tags
  let text = html.replace(/<[^>]*>/g, "");
  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  return text.trim();
};


interface SubSection {
  title?: string;
  description?: string;
  image?: string;
}

interface OurProjectsGalleryProps {
  data?: {
    image?: string;
    title?: string;
    subsections?: SubSection[];
  };
}

const OurProjectsGallery: React.FC<OurProjectsGalleryProps> = ({ data }) => {
  const {
    image = "/images/top.jpg", // default background
    subsections = [],
  } = data || {};

  return (
    <div
      className="section-full bg-img-fix content-inner overlay-black-middle our-projects-galery"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="grid_box">
          {subsections.length > 0 ? (
            subsections.map((item, index) => (
              <div
                key={index}
                className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal"
              >
                <div className="sports-icon">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={stripHtml(item.title || "")}
                      width={85}
                      height={85}
                    />
                  )}
                </div>

                <h4 className="text-capitalize">
                  {stripHtml(item.title || "Untitled")}
                </h4>

                <div className="dez-separator-outer">
                  <div className="dez-separator bg-primary style-liner"></div>
                </div>

                {item.description && (
                  <p className="m-b0">{stripHtml(item.description)}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-white text-center">No project data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProjectsGallery;
