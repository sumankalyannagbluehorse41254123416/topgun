"use client";

import Image from "next/image";

// Helper: remove HTML tags & whitespace
const stripHtml = (html?: string): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "") // remove tags
    .replace(/&nbsp;/g, " ") // clean up &nbsp;
    .replace(/\s+/g, " ") // compress multiple spaces
    .trim();
};

interface Star {
  title?: string;
  description?: string;
  image?: string;
}

interface OurShootingStarsProps {
  data?: {
    title?: string;
    subsections?: Star[];
  };
}

export default function OurShootingStars({ data }: OurShootingStarsProps) {
  const { title = "Our Shooting Stars", subsections = [] } = data || {};

  const stars = subsections
    .map((item) => ({
      name: stripHtml(item.title),
      role: stripHtml(item.description),
      img: item.image || "/images/default-avatar.jpg",
    }))
    .filter((star) => star.name);

  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        {/* === Section Header === */}
        <div className="section-head text-center">
          <h2 className="h2">{stripHtml(title)}</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
          <p>.</p>
        </div>

        {/* === Stars Grid === */}
        <div className="section-content text-center">
          <div className="row">
            {stars.length > 0 ? (
              stars.map((star, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="dez-box m-b30 dez-img-effect vertical-pan dez-staff">
                    <div className="dez-media vertical-pan dez-img-effect">
                      <a href="javascript:void(0)">
                        <Image
                          src={star.img}
                          alt={star.name}
                          width={480}
                          height={430}
                          className="media-images"
                          unoptimized
                        />
                      </a>
                    </div>
                    <div className="p-a15 bg-primary text-white dez-team">
                      <h4 className="dez-title text-capitalize m-t0">
                        {star.name}
                      </h4>
                      <div className="dez-separator-outer">
                        <div className="dez-separator bg-white style-liner"></div>
                      </div>
                      <span className="dez-member-position">{star.role}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No stars found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
