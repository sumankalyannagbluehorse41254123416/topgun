"use client";

import Link from "next/link";

export default function GalleryBannerSection() {
  return (
    <>
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage:
            "url(/images/gallery-banner.jpg)",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">Gallery</h1>
          </div>
        </div>
      </div>

      <div className="breadcrumb-row">
        <div className="container">
          <ul className="list-inline">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Our Gallery</li>
          </ul>
        </div>
      </div>
    </>
  );
}
