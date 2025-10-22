"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChampionsBannerSection() {
  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage:
            "url(/images/champ-banner.jpg)",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">Our Champions</h1>
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
            <li>Our Champions</li>
          </ul>
        </div>
      </div>
    </>
  );
}
