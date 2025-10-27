"use client";

import Image from "next/image";

interface SubSection {
  description?: string;
}

interface TopgunAboutSectionProps {
  data: {
    title?: string;
    shortDescription?: string;
    image?: string;
    subsections?: SubSection[];
  };
}

export default function TopgunAboutSection({ data }: TopgunAboutSectionProps) {
  const { title, shortDescription, image, subsections = [] } = data || {};

  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-content">
          <div className="row">
            {/* === Left Image === */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div>
                <Image
                  src={image || "/images/1649670121050.png"}
                  alt={title || "TOPGUN SHOOTING ACADEMY"}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* === Right Text === */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h2>{title || "TOPGUN SHOOTING ACADEMY"}</h2>

              {/* Short Description (Main paragraph) */}
              {shortDescription && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: shortDescription,
                  }}
                />
              )}
            </div>

            {/* === Bottom Description Paragraphs === */}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                {subsections.length > 0 &&
                  subsections.map((sub, index) =>
                    sub.description ? (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: sub.description,
                        }}
                      />
                    ) : null
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
