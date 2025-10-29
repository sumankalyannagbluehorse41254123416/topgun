"use client";
import { handleSubmitForm } from "@/services/handleSubmit";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

interface SubSection {
  title?: string;
  description?: string;
}

interface SectionData {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

interface FormField {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "textarea" | "number" | "url";
  required?: boolean;
}

interface FormData {
  title?: string;
  actionUrl?: string;
  buttonText?: string;
}

interface ContactSectionProps {
  data?: SectionData;
  form?: FormData;
  fields?: FormField[];
}

interface ContactFormValues {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: string | undefined;
}

const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function ContactSection({ data, form, fields }: ContactSectionProps) {
  const [loading, setLoading] = useState(false);

  // ✅ Gmail-specific validation
  const validateEmail = (email: string) => {
    // Must end with @gmail. + at least 2 characters (like .com, .in)
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.[A-Za-z]{2,}$/;
    return gmailPattern.test(email);
  };

  // ✅ Strong validation function
  const validateForm = (dataObj: ContactFormValues): boolean => {
    // ---- Gmail Validation ----
    if (dataObj.email) {
      const email = dataObj.email.trim();
      if (!validateEmail(email)) {
        alert("❌ Please enter a valid Gmail address (e.g. example@gmail.com).");
        return false;
      }
    }

    // ---- Phone validation ----
    if (dataObj.phone) {
      const phone = dataObj.phone.trim();
      if (!/^\d{10}$/.test(phone)) {
        alert("❌ Phone number must be exactly 10 digits.");
        return false;
      }
    }

    return true;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const dataObj: ContactFormValues = {};
    formData.forEach((value, key) => {
      dataObj[key] = String(value);
    });

    if (!validateForm(dataObj)) return;

    try {
      setLoading(true);
      const host = window.location.host;
      const res = await handleSubmitForm(host, dataObj);
      alert("✅ Form submitted successfully!");
      formElement.reset();
      console.log("Response:", res);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Restrict phone field to digits only
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  if (!data) return null;

  return (
    <div className="section-full content-inner contact-style-1">
      <div className="container">
        <div className="row">
          {/* === Contact Form === */}
          <div className="col-lg-8">
            <div className="p-a30 bg-gray clearfix m-b30">
              <h2>Contact Us</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Gmail Id"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                        maxLength={10}
                        minLength={10}
                        onKeyPress={handlePhoneKeyPress}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={4}
                        className="form-control"
                        placeholder="Your Message..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="site-button" disabled={loading}>
                      <span>{loading ? "Submitting..." : "Submit"}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* === Quick Contact Section === */}
          <div className="col-lg-4 d-lg-flex">
            <div className="p-a30 m-b30 border-1 contact-area align-self-stretch">
              <h2 className="m-b10">{stripHtml(data.title || "Quick Contact")}</h2>
              <p>{stripHtml(data.shortDescription || "")}</p>

              <ul className="no-margin">
                {data.subsections?.map((item, index) => (
                  <li className="icon-bx-wraper left m-b30" key={index}>
                    <div className="icon-bx-xs bg-primary">
                      <Link href="#" className="icon-cell">
                        {index === 0 && <FontAwesomeIcon icon={faMapMarkerAlt} />}
                        {index === 1 && <FontAwesomeIcon icon={faEnvelope} />}
                        {index === 2 && <FontAwesomeIcon icon={faMobileAlt} />}
                      </Link>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">
                        {stripHtml(item.title)}
                      </h6>
                      <p>{stripHtml(item.description)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="m-t20">
                <ul className="social-icon dez-border social-icon-lg">
                  <li>
                    <a
                      href="https://www.facebook.com/TopGunShootingAcademy"
                      className="fa bg-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/TopGunIndia"
                      className="fa bg-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/topgun.co"
                      className="fa bg-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/topgunshootingacademy"
                      className="fa bg-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* === Google Map === */}
        <div className="row">
          <div className="col-lg-12 m-b30">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3504.9945278705136!2d77.25430081472724!3d28.53988419501969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce3d93e7daa7d%3A0xae1de960d70b82c3!2sBlock%20H%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!3m2!1d28.539918099999998!2d77.2559612!5e0!3m2!1sen!2sin!4v1649940138253!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
