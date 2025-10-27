"use client";

import { FormEvent } from "react";
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

export default function ContactUsPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.submit(); // same native form submit behavior
  };

  return (
    <div className="container">
      <div className="row">
        {/* === Contact Form Section === */}
        <div className="col-lg-8">
          <div className="p-a30 bg-gray clearfix m-b30">
            <h2>Contact Us</h2>
            <form
              method="post"
              action="https://topgunshootingacademy.com/contact-us/save"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_token"
                value="4dEWitKdRWVK0lbWdCCcq1Mue2pWmmwcQqVk6ahH"
              />
              <input type="hidden" value="Contact" name="dzToDo" />
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        pattern="^[a-zA-Z\\s]{1,100}$"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        placeholder="Your Email Id"
                        pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        className="form-control"
                        placeholder="Phone"
                        pattern="^[0-9+]{10,15}$"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="form-control"
                        placeholder="Subject"
                        pattern="^[a-zA-Z\\s]{1,100}$"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="input-group">
                      <textarea
                        name="message"
                        rows={4}
                        id="message"
                        className="form-control"
                        required
                        placeholder="Your Message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="g-recaptcha"
                    id="rcaptcha"
                    data-sitekey="6Ld9lN4fAAAAAAGediZGBLs0vmmfFssRpEE-vZKl"
                    data-callback="recaptchaCallback"
                  ></div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" id="submitbtn" className="site-button">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* === Quick Contact Section === */}
        <div className="col-lg-4 d-lg-flex">
          <div className="p-a30 m-b30 border-1 contact-area align-self-stretch">
            <h2 className="m-b10">Quick Contact</h2>
            <p>
              If you have any questions simply use the following contact
              details.
            </p>
            <ul className="no-margin">
              <li className="icon-bx-wraper left m-b30">
                <div className="icon-bx-xs bg-primary">
                  <Link href="#" className="icon-cell">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </Link>
                </div>
                <div className="icon-content">
                  <h6 className="text-uppercase m-tb0 dlab-tilte">ADDRESS:</h6>
                  <p>
                    H-19A, 2nd Floor, Kalkaji Main road, New Delhi, Delhi 110019
                  </p>
                </div>
              </li>
              <li className="icon-bx-wraper left m-b30">
                <div className="icon-bx-xs bg-primary">
                  <Link href="#" className="icon-cell">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Link>
                </div>
                <div className="icon-content">
                  <h6 className="text-uppercase m-tb0 dlab-tilte">EMAIL:</h6>
                  <p>shimonsharif@gmail.com</p>
                </div>
              </li>
              <li className="icon-bx-wraper left m-b30">
                <div className="icon-bx-xs bg-primary">
                  <Link href="#" className="icon-cell">
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </Link>
                </div>
                <div className="icon-content">
                  <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                  <p>011 4108 8098</p>
                </div>
              </li>
            </ul>

            <div className="m-t20">
              <ul className="social-icon dez-border social-icon-lg">
                <li>
                  <a
                    href="https://www.facebook.com/TopGunShootingAcademy"
                    className="fa bg-primary"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/TopGunIndia"
                    className="fa bg-primary"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/topgun.co"
                    className="fa bg-primary"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/topgunshootingacademy"
                    className="fa bg-primary"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* === Google Map Section === */}
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
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
