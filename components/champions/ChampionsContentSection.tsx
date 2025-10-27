"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Type for props
interface SubSection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface SectionData {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

interface Props {
  leftData?: SectionData;
  rightData?: SectionData;
}

const stripHtml = (html: string) =>
  html
    ? html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .trim()
    : "";

export default function ChampionsContentSection({ leftData, rightData }: Props) {
  if (!leftData && !rightData) return null;

  const leftTitle = stripHtml(leftData?.title || "OUR CHAMPIONS");
  const leftDescription = stripHtml(leftData?.shortDescription || "");
  const leftCards = leftData?.subsections || [];

  const rightCards = rightData?.subsections || [];

  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          {/* === Left Column === */}
          <div className="col-lg-9">
            <div>
              <h1 className="m-t0">{leftTitle}</h1>
              <div className="dez-separator bg-primary"></div>
              {leftDescription && <p><strong>{leftDescription}</strong></p>}
            </div>

            <div className="row">
              {leftCards.map((item, index) => (
                <div key={item.id || index} className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    {item.image && (
                      <div className="dez-media">
                        <Link href="#">
                          <Image
                            src={item.image}
                            alt={stripHtml(item.title || "Champion")}
                            width={400}
                            height={300}
                            className="media-img"
                          />
                        </Link>
                      </div>
                    )}
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">{stripHtml(item.title || "")}</Link>
                      </h4>
                      <p>{stripHtml(item.description || "")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Right Sidebar === */}
          <div className="col-lg-3">
            {rightCards.map((item, index) => (
              <div
                key={item.id || index}
                className="icon-bx-wraper bx-style-1 p-a30 center m-b15"
              >
                <div className="icon-bx-sm text-primary bg-white radius border-2 m-b20">
                  <Link href="#" className="icon-cell">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </div>
                <div className="icon-content">
                  <h5 className="dez-tilte text-uppercase">
                    {stripHtml(item.title || "")}
                  </h5>
                  <p>{stripHtml(item.description || "")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
