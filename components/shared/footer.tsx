
import React from "react";
import Link from "next/link";
import SubscribeSection from "../SubscribeSection";

export default function Footer() {
  return (
    <footer
      className="site-footer footer-overlay bg-img-fix footer-skew"
      style={{
        backgroundImage: "url('/images/acad2.jpeg')",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        display: "block",
      }}
    >
      {/* === Footer Top === */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* === Subscribe Section === */}
            <div className="col-lg-6 col-sm-6">
              <SubscribeSection />
            </div>

            {/* === Contact Section === */}
            <div className="col-lg-6 col-sm-6 footer-col-4">
              <div className="widget_services">
                <h4 className="m-b15 text-uppercase">Contact Us</h4>
                <div className="bg-primary"></div>
                <div id="NavBarIudyogFooter">
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary">
                        <Link href="#" className="icon-cell" aria-label="Location">
                          {/* Map Marker SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          ADDRESS:
                        </h6>
                        <p>
                          H-19A, 2nd Floor, Kalkaji Main road, New Delhi, Delhi
                          110019
                        </p>
                      </div>
                    </li>

                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary">
                        <Link href="#" className="icon-cell" aria-label="Email">
                          {/* Envelope SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          EMAIL:
                        </h6>
                        <p>shimonsharif@gmail.com</p>
                      </div>
                    </li>

                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary">
                        <Link href="#" className="icon-cell" aria-label="Phone">
                          {/* Phone SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57.14.42.04.89-.25 1.21l-2.2 2.21z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          PHONE
                        </h6>
                        <p>011 4108 8098</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-left">
              <span>Copyright © 2022 TopGun Powered By </span>
              <Link href="https://iudyog.com" target="_blank">
                iUdyog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
