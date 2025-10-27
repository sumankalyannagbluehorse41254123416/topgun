"use client";

import React from "react";
import Link from "next/link";

interface AboutBannerProps {
  data: {
    title?: string;
    image?: string;
  };
}

export default function AboutBanner({ data }: AboutBannerProps) {
  const { title, image } = data || {};

  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: `url(${image || "/images/branch1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{title || "About Us"}</h1>
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
            <li>{title || "About Us"}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
