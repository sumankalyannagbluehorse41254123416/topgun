"use client";

import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/images/1735814299509.jpg",
    "/images/1735814326888.jpg",
    "/images/1735814060556.jpg",
    "/images/1735814023030.jpg",
    "/images/1726659711498.jpg",
    "/images/1726659671948.jpg",
    "/images/1726659405364.jpg",
    "/images/1726659529490.jpg",
    "/images/1726659638016.jpg",
    "/images/1654683778827.jpg",
    "/images/1665395297353.jpg",
    "/images/1665395337360.jpg",
    "/images/1665395405324.jpg",
    "/images/1649668488977.jpg",
    "/images/1649668504787.jpg",
    "/images/1649668574063.jpg",
    "/images/1649668590315.jpg",
    "/images/1665383868055.jpg",
    "/images/1665383920520.jpg",
    "/images/1665383948282.jpg",
    "/images/1665383982695.jpg",
  ];

  return (
    <div
      className="section-full bg-img-fix content-inner overlay-black-middle"
      style={{
        backgroundImage: "url('/images/topgun.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-head text-center text-white">
          <h2 className="h2">GALLERY</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
          <p></p>
        </div>

        <div className="clearfix">
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
                        className=""
                      />
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
