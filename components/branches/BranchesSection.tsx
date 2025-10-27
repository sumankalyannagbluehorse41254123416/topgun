"use client";

import Image from "next/image";
import Link from "next/link";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
}

interface BranchesSectionProps {
  data?: {
    title?: string;
    shortDescription?: string;
    subsections?: Subsection[];
  };
}

export default function BranchesSection({ data }: BranchesSectionProps) {
  const subsections = data?.subsections || [];

  return (
    <div className="clearfix">
      <div className="section-full content-inner">
        <div className="container">
          <div className="row">
            {subsections.length > 0 ? (
              subsections.map((branch, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-sm-6 m-b30"
                >
                  <div className="dez-box p-a20 border-1 bg-gray">
                    {/* === Branch Image === */}
                    <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                      <Image
                        src={branch.image || "/images/default.jpg"}
                        alt={branch.title || "Branch"}
                        width={600}
                        height={400}
                        className="dez-img-effect-image"
                      />
                    </div>

                    {/* === Branch Info === */}
                    <div className="dez-info p-t20 text-center">
                      <h4 className="dez-title m-t0 m-b10 text-capitalize">
                        <Link href="#">{branch.title || "Branch Name"}</Link>
                      </h4>
                      <h2
                        className="m-tb0"
                        dangerouslySetInnerHTML={{
                          __html: branch.description || "",
                        }}
                      />
                      <Link
                        href="/contact"
                        className="site-button m-t15"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full">No branch data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
