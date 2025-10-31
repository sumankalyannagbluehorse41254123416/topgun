"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

export default function CoachingTeamSection({ section }: { section: Section }) {
  if (!section) return null;

  return (
    <div className="section-full bg-white content-inner pb-5">
      <div className="container">
        {/* ✅ Section Header */}
        <div className="section-head text-center">
          {section.title && <h3 className="h3">{section.title}</h3>}
          <div className="dez-separator bg-primary"></div>

          {section.shortDescription && (
            <div
              dangerouslySetInnerHTML={{ __html: section.shortDescription }}
            />
          )}
        </div>

        {/* ✅ Team Members */}
        <div className="section-content">
          <div className="members_flex">
            {section.subsections?.map((member, index) => (
              <div className="box-border" key={index}>
                <div className="dez-box">
                  {/* Member Image */}
                  {member.image && (
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src={member.image}
                          alt={member.title || "Team Member"}
                          width={400}
                          height={400}
                          className="media-image w-full"
                        />
                      </Link>
                    </div>
                  )}

                  {/* Member Info */}
                  <div className="dez-info p-a20 p-t40">
                    {/* Member Name */}
                    {member.title && (
                      <h4 className="dez-title m-tb0">
                        <Link href="#">{member.title}</Link>
                      </h4>
                    )}

                    {/* Social Icons */}
                    <div className="bg-primary skew-content-box">
                      <ul className="dez-social-icon">
                        <li>
                          <Link
                            href="https://www.facebook.com/TopGunShootingAcademy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://twitter.com/TopGunIndia"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.linkedin.com/topgun.co"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/topgunshootingacademy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Member Description */}
                    {member.description && (
                      <div
                        className="m-t10 m-b0"
                        dangerouslySetInnerHTML={{
                          __html: member.description,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
