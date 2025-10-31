"use client";

import Image from "next/image";

interface Subsection {
  description?: string;
}

interface FounderSectionProps {
  section: {
    title?: string;
    shortDescription?: string;
    image?: string;
    subsections?: Subsection[];
  };
}

export default function FounderSection({ section }: FounderSectionProps) {
  if (!section) return null;

  return (
    <div className="container pt-0 pt-lg-5">
      <div className="section-content">
        <div className="row">
          {/* Left Text Section */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* Dynamic Title */}
            {section.title && <h2>{section.title}</h2>}

            <div>
              {/* Short Description (HTML from backend) */}
              {section.shortDescription && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: section.shortDescription,
                  }}
                />
              )}

              {/* Subsection Descriptions (loop through each) */}
              {section.subsections?.map((sub, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: sub.description || "",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            {section.image && (
              <div>
                <Image
                  src={section.image}
                  alt={section.title || "Founder Image"}
                  width={600}
                  height={400}
                  className="imges w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
