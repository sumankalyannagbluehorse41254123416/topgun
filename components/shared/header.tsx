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
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const togglerRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add("is-fixed");
        } else {
          headerRef.current.classList.remove("is-fixed");
        }
      }
    };

    const animateNavbar = (isOpening: boolean) => {
      if (isAnimatingRef.current || !navbarRef.current) return;
      
      isAnimatingRef.current = true;
      const navbar = navbarRef.current;
      
      if (isOpening) {
        // Add show class first
        navbar.classList.add("show");
        
        // Opening animation - slide in from left
        navbar.style.display = "block";
        navbar.style.transform = "translateX(-100%)";
        navbar.style.opacity = "0";
        navbar.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        
        // Force reflow
        navbar.getBoundingClientRect();
        
        // Animate to original position
        navbar.style.transform = "translateX(0)";
        navbar.style.opacity = "1";
        
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 300);
      } else {
        // Closing animation - slide out to left
        navbar.style.transform = "translateX(0)";
        navbar.style.opacity = "1";
        navbar.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        
        // Force reflow
        navbar.getBoundingClientRect();
        
        // Animate to left
        navbar.style.transform = "translateX(-100%)";
        navbar.style.opacity = "0";
        
        setTimeout(() => {
          navbar.style.display = "none";
          navbar.style.transform = "";
          navbar.style.opacity = "";
          navbar.style.transition = "";
          navbar.classList.remove("show");
          isAnimatingRef.current = false;
        }, 300);
      }
    };

    const handleToggle = () => {
      if (isAnimatingRef.current) return;
      
      const toggler = togglerRef.current;
      const navbar = navbarRef.current;
      
      if (!toggler || !navbar) return;

      const isOpening = !toggler.classList.contains("open");
      
      // Toggle the 'open' class on the toggler button
      if (isOpening) {
        toggler.classList.add("open");
      } else {
        toggler.classList.remove("open");
      }
      
      // Animate the navbar
      animateNavbar(isOpening);
    };

    // Initialize navbar state - only hide on mobile
    const initializeNavbar = () => {
      if (navbarRef.current && togglerRef.current) {
        const navbar = navbarRef.current;
        const toggler = togglerRef.current;
        const isMobile = window.innerWidth < 992; // 992px is typical Bootstrap md breakpoint
        
        if (isMobile) {
          // On mobile, start with navbar hidden and toggler not open
          toggler.classList.remove("open");
          navbar.classList.remove("show");
          navbar.style.display = "none";
          navbar.style.transform = "translateX(-100%)";
          navbar.style.opacity = "0";
        } else {
          // On desktop, always show navbar and reset toggler
          toggler.classList.remove("open");
          navbar.style.display = "block";
          navbar.style.transform = "translateX(0)";
          navbar.style.opacity = "1";
          navbar.classList.add("show");
        }
      }
    };

    // Handle resize to adjust navbar visibility
    const handleResize = () => {
      initializeNavbar();
    };

    // Initial setup
    initializeNavbar();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Add click event listener to toggler
    const toggler = togglerRef.current;
    if (toggler) {
      toggler.addEventListener("click", handleToggle);
    }

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (toggler) {
        toggler.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <header className="site-header header-style-6 dark mo-left">
      <div className="sticky-header main-bar-wraper navbar-expand-lg" ref={headerRef}>
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
                className="navbar-toggler navicon justify-content-end collapsed"
                type="button"
                ref={togglerRef}
              >
                <span />
                <span />
                <span />
              </button>

              {/* Navbar - Removed 'collapse' class */}
              <div
                className="header-nav navbar-collapse justify-content-end"
                id="navbarNavDropdown"
                ref={navbarRef}
              >
                <div className="logo-header mostion"></div>
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