"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="site-header header-style-6 dark mo-left">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          {/* === Top Bar === */}
          <div className="top-bar">
            <div className="container top-bar-crve">
              <div className="row justify-content-between">
                {/* Left Side - Email & Phone */}
                <div className="dez-topbar-left">
                  <ul className="social-line text-center pull-right">
                    <li className="email">
                      <a href="mailto:shimonsharif@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        <span>shimonsharif@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:01141088098">
                        <FontAwesomeIcon icon={faPhone} />{" "}
                        <span>011 4108 8098</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Side - Social Icons */}
                <div className="dez-topbar-right">
                  <ul className="social-line text-center pull-right">
                    <li>
                      <Link
                        href="https://www.facebook.com/TopGunShootingAcademy"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/TopGunIndia"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/topgun.co"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/topgunshootingacademy"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* === Main Header === */}
          <div className="header-bar">
            <div className="container clearfix">
              {/* Logo */}
              <div className="logo-header mostion">
                <Link href="https://topgunshootingacademy.com">
                  <Image
                    src="/images/topgunlogo.png"
                    width={193}
                    height={89}
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Mobile Nav Toggle */}
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>

              {/* Navbar */}
              <div
                className="header-nav navbar-collapse collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link id="Home-top" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link id="About-Us-top" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link id="Branches-top" href="/branches">
                      Branches
                    </Link>
                  </li>
                  <li>
                    <Link id="Classes-top" href="/classes">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link id="Our-Champions-top" href="/champions">
                      Our Champions
                    </Link>
                  </li>
                  <li>
                    <Link id="Our-Gallery-top" href="/gallery">
                      Our Gallery
                    </Link>
                  </li>
                  <li>
                    <Link id="Contact-Us-top" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
