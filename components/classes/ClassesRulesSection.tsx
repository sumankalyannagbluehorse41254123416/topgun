"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faRecycle,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

// ✅ Helper: Strip HTML tags & decode entities (&nbsp;, &amp;, etc.)
const stripHtml = (html: string): string => {
  if (!html) return "";
  // Remove tags
  const noTags = html.replace(/<[^>]*>/g, "");
  // Decode HTML entities like &nbsp;
  const textArea = typeof window !== "undefined" ? document.createElement("textarea") : null;
  if (textArea) {
    textArea.innerHTML = noTags;
    return textArea.value.trim();
  }
  // Fallback for SSR
  return noTags.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
};

// ✅ Type definitions
interface Subsection {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
}

interface RulesSectionData {
  title?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

interface ClassesRulesSectionProps {
  data: RulesSectionData;
}

export default function ClassesRulesSection({ data }: ClassesRulesSectionProps) {
  if (!data) return null;

  const title = stripHtml(data.title || "");
  const shortDescription = stripHtml(data.shortDescription || "");
  const icons = [faCogs, faRecycle, faGraduationCap, faTrophy];
  const subsections = data.subsections || [];

  return (
    <div className="section-full content-area bg-white">
      <div className="container">
        <div className="row m-b50">
          <div className="col-lg-12 col-md-12">
            {/* === Section Title === */}
            {title && <h2 className="text-uppercase m-b11">{title}</h2>}

            {/* === Section Short Description === */}
            {shortDescription && <p className="m-b12">{shortDescription}</p>}

            <div className="section-content">
              <div className="row">
                {subsections.map((item: Subsection, index: number) => (
                  <div key={item.id || index} className="col-lg-4 col-sm-6 m-b30">
                    <div className="icon-bx-wraper center">
                      <div className="icon-bx-sm radius bg-primary m-b20">
                        <a href="#" className="icon-cell">
                          <FontAwesomeIcon icon={icons[index] || faCogs} />
                        </a>
                      </div>
                      <div className="icon-content">
                        <h5 className="dez-tilte text-uppercase">
                          {stripHtml(item.title || "")}
                        </h5>
                        <p>
                          {stripHtml(
                            item.shortDescription || item.description || ""
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
