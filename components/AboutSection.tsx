"use client";

import Image from "next/image";

// ✅ Utility to strip HTML tags safely
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

interface SubSection {
  description?: string;
  image?: string;
}

interface AboutSectionProps {
  data?: {
    title?: string;
    shortDescription?: string;
    imageUrl?: string;
    subsections?: SubSection[];
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const {
    title = "Topgun Shooting Academy",
    shortDescription = "Default short description here.",
    imageUrl = "/images/1709644852988.jpeg",
    subsections = [],
  } = data || {};

  // ✅ First paragraph from shortDescription (HTML stripped)
  const firstParagraph = stripHtml(shortDescription);

  // ✅ Next paragraphs from subsections.description (HTML stripped)
  const additionalDescriptions = subsections.map((s, i) =>
    s.description ? <p key={i}>{stripHtml(s.description)}</p> : null
  );

  // ✅ Small images row — from subsections.image
  const subsectionImages = subsections
    .filter((s) => s.image)
    .slice(0, 3)
    .map((s, i) => (
      <div className="col-lg-4 col-sm-4 col-4" key={i}>
        <div className="dez-media dez-img-effect off-color">
          <Image
            src={s.image!}
            alt={`About image ${i + 1}`}
            width={200}
            height={200}
            className="sport"
          />
        </div>
      </div>
    ));

  return (
    <div className="container">
      <div className="section-content text-center">
        <div className="row">
          {/* === Left Column === */}
          <div className="col-lg-6 col-md-6">
            <div className="text-left">
              <h3 className="font-weight-600 m-t10">{stripHtml(title)}</h3>

              <div>
                <p>{firstParagraph}</p>
                {additionalDescriptions}
              </div>

              {/* === Small Images Row === */}
              <div className="row">{subsectionImages}</div>
            </div>
          </div>

          {/* === Right Column === */}
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="dez-box">
              <div className="dez-media dez-img-effect off-color">
                <Image
                  src={imageUrl}
                  alt={stripHtml(title)}
                  width={555}
                  height={393}
                  className="w-100 h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
