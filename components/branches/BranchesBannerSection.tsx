"use client";

import Link from "next/link";

interface BranchesBannerProps {
  data: {
    title?: string;
    image?: string;
  };
}

export default function BranchesBannerSection({ data }: BranchesBannerProps) {
  const { title, image } = data || {};

  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${image || "/images/branch-banner.jpg"})`,
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{title || "Branches"}</h1>
          </div>
        </div>
      </div>

      {/* === Breadcrumb Section === */}
      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{title || "Branches"}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
