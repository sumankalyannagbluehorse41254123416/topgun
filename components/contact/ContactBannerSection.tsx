"use client";

import Link from "next/link";

interface BannerData {
  title?: string;
  imageUrl?: string;
}

interface ContactBannerSectionProps {
  data?: BannerData;
}

export default function ContactBannerSection({ data }: ContactBannerSectionProps) {
  const bannerImage = data?.imageUrl || "/images/contact-banner.jpg";
  const bannerTitle = data?.title || "Contact Us";

  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{bannerTitle}</h1>
          </div>
        </div>
      </div>

      {/* === Breadcrumb Row === */}
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
