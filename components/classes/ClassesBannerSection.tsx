"use client";

import Link from "next/link";

interface ClassesBannerSectionProps {
  data: {
    title?: string;
    imageUrl?: string;
  };
}

export default function ClassesBannerSection({ data }: ClassesBannerSectionProps) {
  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${data.imageUrl || "/images/default-banner.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{data.title || "Classes"}</h1>
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
            <li>{data.title || "Classes"}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
