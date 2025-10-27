"use client";

import Link from "next/link";

interface BannerData {
  title?: string;
  imageUrl?: string;
}

interface GalleryBannerSectionProps {
  data?: BannerData;
}

export default function GalleryBannerSection({ data }: GalleryBannerSectionProps) {
  const bannerImage = data?.imageUrl || "/images/gallery-banner.jpg";
  const bannerTitle = data?.title || "Gallery";

  return (
    <>
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{bannerTitle}</h1>
          </div>
        </div>
      </div>

      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{bannerTitle}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
