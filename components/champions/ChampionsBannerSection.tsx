"use client";

import Image from "next/image";
import Link from "next/link";

interface BannerData {
  title?: string;
  imageUrl?: string;
}

export default function ChampionsBannerSection({ data }: { data: BannerData }) {
  if (!data) return null;

  // Safely clean the title and ensure no unwanted HTML or &nbsp;
  const stripHtml = (html: string) =>
    html
      ? html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim()
      : "";

  const title = stripHtml(data.title || "Our Champions");
  const imageUrl = data.imageUrl || "/images/champ-banner.jpg";

  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{title}</h1>
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
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
