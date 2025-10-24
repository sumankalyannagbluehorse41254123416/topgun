"use client";

import Image from "next/image";

interface SubSection {
  title?: string;
  image?: string;
}

interface BranchesSectionProps {
  data?: {
    title?: string;
    image?: string; // main logo image
    subsections?: SubSection[];
  };
}

export default function BranchesSection({ data }: BranchesSectionProps) {
  const {
    title = "Branches",
    image = "/images/topgunlogo.png", // fallback logo
    subsections = [],
  } = data || {};

  return (
    <section className="pt-5">
      <div className="container">
        {/* Dynamic Section Title */}
        <div className="section-head text-center">
          <h2 className="h2 text-uppercase">{title}</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="turfsList">
              {subsections.length > 0 ? (
                subsections.map((branch, index) => (
                  <li className="turf1" key={index}>
                    <div className="turf1-img">
                      <Image
                        src={branch.image || "/images/default-branch.jpg"}
                        alt={branch.title || "Branch Image"}
                        width={500}
                        height={300}
                      />
                    </div>

                    {/* Dynamic logo from section image */}
                    <div className="ccImage">
                      <Image
                        src={image}
                        alt="Branch logo"
                        width={100}
                        height={100}
                      />
                    </div>

                    <h3>{branch.title}</h3>
                  </li>
                ))
              ) : (
                <p className="text-center text-muted">
                  No branch data available.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
