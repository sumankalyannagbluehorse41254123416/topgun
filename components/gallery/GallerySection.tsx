"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryWithFilter() {
  const [activeFilter, setActiveFilter] = useState("");

  const galleryItems = [
    {
      id: 1,
      category: "water-sports",
      src: "/images/1665471334412.jpg",
      alt: "Img",
    },
    {
      id: 2,
      category: "water-sports",
      src: "/images/1665470709874.jpg",
      alt: "img2",
    },
    {
      id: 3,
      category: "water-sports",
      src: "/images/1665471431473.jpg",
      alt: "img3",
    },
    {
      id: 4,
      category: "water-sports",
      src: "/images/1665470960869.jpg",
      alt: "img4",
    },
    {
      id: 5,
      category: "jumping",
      src: "/images/1665471466606.jpg",
      alt: "Img",
    },
    {
      id: 6,
      category: "jumping",
      src: "/images/1665469413581.jpg",
      alt: "img1",
    },
    {
      id: 7,
      category: "jumping",
      src: "/images/1649924491273.jpg",
      alt: "img2",
    },
    {
      id: 8,
      category: "jumping",
      src: "/images/1649924525785.jpg",
      alt: "img3",
    },
    { id: 9, category: "bikes", src: "/images/1649924570252.jpg", alt: "img1" },
    {
      id: 10,
      category: "bikes",
      src: "/images/1649924599824.jpg",
      alt: "img2",
    },
    {
      id: 11,
      category: "bikes",
      src: "/images/1649924639552.jpg",
      alt: "img3",
    },
    {
      id: 12,
      category: "bikes",
      src: "/images/1649924678464.jpg",
      alt: "img4",
    },
    {
      id: 13,
      category: "soccer",
      src: "/images/1649924729461.jpg",
      alt: "img1",
    },
    {
      id: 14,
      category: "soccer",
      src: "/images/1649924756970.jpg",
      alt: "img2",
    },
    {
      id: 15,
      category: "soccer",
      src: "/images/1649924789680.jpg",
      alt: "img3",
    },
    {
      id: 16,
      category: "soccer",
      src: "/images/1649924811032.jpg",
      alt: "img4",
    },
  ];

  const filters = [
    { label: "Show All", value: "" },
    { label: "Academy", value: "water-sports" },
    { label: "Shooters", value: "jumping" },
    { label: "Achievers", value: "bikes" },
    { label: "Staff", value: "soccer" },
  ];

  const filteredItems = activeFilter
    ? galleryItems.filter((item) => item.category === activeFilter)
    : galleryItems;

  return (
    <div>
      {/* ==== FILTER BUTTONS ==== */}
      <div className="site-filters clearfix center m-b40">
        <ul className="filters" data-toggle="buttons">
          {filters.map((f) => (
            <li
              key={f.value || "all"}
              data-filter={f.value}
              className={`btn ${activeFilter === f.value ? "active" : ""}`}
            >
              <button
                type="button"
                className="site-button-secondry"
                onClick={() => setActiveFilter(f.value)}
              >
                <span>{f.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ==== GALLERY ==== */}
      <div className="clearfix">
        <ul
          id="masonry"
          className="row dez-gallery-listing gallery-grid-4 m-b0 mfp-gallery"
          style={{ position: "relative" }}
        >
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className={`card-container col-lg-3 col-sm-6 ${item.category}`}
              style={{ position: "relative" }}
            >
              <div className="dez-box dez-gallery-box">
                <div className="dez-thum dez-img-overlay1 dez-img-effect zoom-slow">
                  <button
                    type="button"
                    className="image-button"
                    style={{ border: "none", padding: 0, background: "none" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="zoom-slow-image"
                      width={400}
                      height={400}
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
