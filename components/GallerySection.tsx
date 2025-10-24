"use client";

import Image from "next/image";

interface SubSection {
  image?: string;
}

interface GallerySectionProps {
  data?: {
    title?: string;
    image?: string; // section background image
    subsections?: SubSection[];
  };
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  const {
    title = "Gallery",
    image = "/images/topgun.jpg",
    subsections = [],
  } = data || {};

  // Extract only valid image URLs from subsections
  const images = subsections
    .map((item) => item.image)
    .filter((img): img is string => Boolean(img));

  return (
    <div
      className="section-full bg-img-fix content-inner overlay-black-middle"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-head text-center text-white">
          <h2 className="h2">{title}</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
        </div>

        <div className="clearfix">
          {images.length > 0 ? (
            <ul
              id="masonry"
              className="row dez-gallery-listing gallery-grid-4 m-b0 gallery lightgallery"
            >
              {images.map((src, index) => (
                <li
                  key={index}
                  className="card-container col-lg-3 col-sm-6 jumping"
                >
                  <div className="dez-box dez-gallery-box">
                    <a
                      href="https://www.instagram.com/topgunshootingacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="dez-media dez-img-overlay1 dez-img-effect zoom-slow">
                        <Image
                          src={src}
                          alt={`gallery-image-${index + 1}`}
                          width={480}
                          height={430}
                          unoptimized
                        />
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-white">No gallery images found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
