"use client";

import React from "react";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <>
      {/* === Banner Section === */}
      <div
        className="dez-bnr-inr overlay-black-middle"
        style={{
          backgroundImage: "url(/images/branch1.jpg)",
        }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">About us</h1>
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
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}
