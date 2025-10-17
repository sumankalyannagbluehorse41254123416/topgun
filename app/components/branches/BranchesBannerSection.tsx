"use client";

import Link from "next/link";

export default function BranchesBannerSection() {
  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage:
            "url(/images/branch-banner.jpg)",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">Branches</h1>
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
            <li>Branches</li>
          </ul>
        </div>
      </div>
    </>
  );
}
