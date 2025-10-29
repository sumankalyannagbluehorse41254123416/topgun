// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // Types
// interface Subsection {
//   id?: number;
//   title?: string;
//   description?: string;
//   image?: string;
// }

// interface GallerySectionProps {
//   data?: {
//     subsections?: Subsection[];
//   };
// }

// // Strip HTML safely
// const stripHtml = (html: string = "") =>
//   html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();

// export default function GallerySection({ data }: GallerySectionProps) {
//   const [activeFilter, setActiveFilter] = useState("");

//   const galleryItems =
//     data?.subsections?.map((item, index) => ({
//       id: item.id || index,
//       category: stripHtml(item.description || "uncategorized"),
//       src: item.image || "/images/default.jpg",
//       alt: stripHtml(item.title || "Image"),
//     })) || [];

//   // Create dynamic filters
//   const uniqueCategories = Array.from(
//     new Set(galleryItems.map((i) => i.category))
//   );

//   const filters = [{ label: "Show All", value: "" }].concat(
//     uniqueCategories.map((cat) => ({
//       label: cat.charAt(0).toUpperCase() + cat.slice(1),
//       value: cat,
//     }))
//   );

//   const filteredItems = activeFilter
//     ? galleryItems.filter((item) => item.category === activeFilter)
//     : galleryItems;

//   if (!data?.subsections?.length) return null;

//   return (
//     <div className="content-area">
//       <div className="container">
//         <div>
//           {/* ==== FILTER BUTTONS ==== */}
//           <div className="site-filters clearfix center m-b40">
//             <ul className="filters" data-toggle="buttons">
//               {filters.map((f) => (
//                 <li
//                   key={f.value || "all"}
//                   data-filter={f.value}
//                   className={`btn ${activeFilter === f.value ? "active" : ""}`}
//                 >
//                   <button
//                     type="button"
//                     className="site-button-secondry"
//                     onClick={() => setActiveFilter(f.value)}
//                   >
//                     <span>{f.label}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ==== GALLERY ==== */}
//           <div className="clearfix">
//             <ul
//               id="masonry"
//               className="row dez-gallery-listing gallery-grid-4 m-b0 mfp-gallery"
//               style={{ position: "relative" }}
//             >
//               {filteredItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className={`card-container col-lg-3 col-sm-6 ${item.category}`}
//                   style={{ position: "relative" }}
//                 >
//                   <div className="dez-box dez-gallery-box">
//                     <div className="dez-thum dez-img-overlay1 dez-img-effect zoom-slow">
//                       <button
//                         type="button"
//                         className="image-button"
//                         style={{
//                           border: "none",
//                           padding: 0,
//                           background: "none",
//                         }}
//                       >
//                         <Image
//                           src={item.src}
//                           alt={item.alt}
//                           className="zoom-slow-image"
//                           width={400}
//                           height={400}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

// Types
interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface GallerySectionProps {
  data?: {
    subsections?: Subsection[];
  };
}

// Strip HTML safely
const stripHtml = (html: string = "") =>
  html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();

export default function GallerySection({ data }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState("");

  const galleryItems =
    data?.subsections?.map((item, index) => ({
      id: item.id || index,
      category: stripHtml(item.description || "uncategorized"),
      src: item.image || "/images/default.jpg",
      alt: stripHtml(item.title || "Image"),
    })) || [];

  // Create dynamic filters
  const uniqueCategories = Array.from(
    new Set(galleryItems.map((i) => i.category))
  );

  const filters = [{ label: "Show All", value: "" }].concat(
    uniqueCategories.map((cat) => ({
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      value: cat,
    }))
  );

  const filteredItems = activeFilter
    ? galleryItems.filter((item) => item.category === activeFilter)
    : galleryItems;

  if (!data?.subsections?.length) return null;

  return (
    <div className="content-area">
      <style jsx>{`
        .gallery-item {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item.show {
          opacity: 1;
          transform: scale(1);
        }

        .gallery-item.hide {
          opacity: 0;
          transform: scale(0.8);
          height: 0;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .image-button {
          display: block;
          width: 100%;
          cursor: pointer;
          overflow: hidden;
        }

        .zoom-slow-image {
          transition: transform 0.3s ease;
          display: block;
          width: 100%;
          height: auto;
        }

        .image-button:hover .zoom-slow-image {
          transform: scale(1.1);
        }

        .site-button-secondry {
          transition: all 0.3s ease;
        }

        .btn.active .site-button-secondry {
          color: white;
        }
      `}</style>

      <div className="container">
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
              {galleryItems.map((item) => {
                const isVisible =
                  !activeFilter || item.category === activeFilter;
                return (
                  <li
                    key={item.id}
                    className={`card-container col-lg-3 col-sm-6 ${
                      item.category
                    } gallery-item ${isVisible ? "show" : "hide"}`}
                    style={{ position: "relative" }}
                  >
                    <div className="dez-box dez-gallery-box">
                      <div className="dez-thum dez-img-overlay1 dez-img-effect zoom-slow">
                        <button
                          type="button"
                          className="image-button"
                          style={{
                            border: "none",
                            padding: 0,
                            background: "none",
                          }}
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
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}