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
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
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
        navbar.classList.add("show");
        navbar.style.display = "block";
        navbar.style.transform = "translateX(-100%)";
        navbar.style.opacity = "0";
        navbar.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        navbar.getBoundingClientRect(); // force reflow
        navbar.style.transform = "translateX(0)";
        navbar.style.opacity = "1";
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 300);
      } else {
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

      if (isOpening) toggler.classList.add("open");
      else toggler.classList.remove("open");

      animateNavbar(isOpening);
    };

    // Auto close menu on link click (Mobile)
    const handleLinkClick = () => {
      const toggler = togglerRef.current;
      const navbar = navbarRef.current;
      if (!toggler || !navbar) return;

      const isMobile = window.innerWidth < 992;
      if (isMobile && toggler.classList.contains("open")) {
        toggler.classList.remove("open");
        animateNavbar(false);
      }
    };

    const initializeNavbar = () => {
      const navbar = navbarRef.current;
      const toggler = togglerRef.current;
      if (!navbar || !toggler) return;

      if (window.innerWidth < 992) {
        toggler.classList.remove("open");
        navbar.classList.remove("show");
        navbar.style.display = "none";
        navbar.style.transform = "translateX(-100%)";
        navbar.style.opacity = "0";
      } else {
        toggler.classList.remove("open");
        navbar.style.display = "block";
        navbar.style.transform = "translateX(0)";
        navbar.style.opacity = "1";
        navbar.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", initializeNavbar);

    const toggler = togglerRef.current;
    if (toggler) toggler.addEventListener("click", handleToggle);

    // Add click event to all nav links
    const navLinks = document.querySelectorAll(".navbar-nav a");
    navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

    initializeNavbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", initializeNavbar);
      if (toggler) toggler.removeEventListener("click", handleToggle);
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
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
                {/* Left Side */}
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

                {/* Right Side */}
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
                      <Link href="https://twitter.com/TopGunIndia" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/topgun.co" target="_blank">
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
                <Link href="/">
                  <Image
                    src="/images/topgunlogo.png"
                    width={193}
                    height={89}
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Hamburger */}
              <button
                className="navbar-toggler navicon justify-content-end collapsed"
                type="button"
                ref={togglerRef}
              >
                <span />
                <span />
                <span />
              </button>

              {/* Navbar */}
              <div
                className="header-nav navbar-collapse justify-content-end"
                id="navbarNavDropdown"
                ref={navbarRef}
              >
                <ul className="nav navbar-nav">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About Us", path: "/about" },
                    { name: "Branches", path: "/branches" },
                    { name: "Classes", path: "/classes" },
                    { name: "Our Champions", path: "/champions" },
                    { name: "Our Gallery", path: "/gallery" },
                    { name: "Contact Us", path: "/contact" },
                  ].map((item) => (
                    <li
                      key={item.path}
                      className={pathname === item.path ? "active" : ""}
                    >
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
