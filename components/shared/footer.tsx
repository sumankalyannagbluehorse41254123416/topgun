"use client";

import React from "react";
import Link from "next/link";

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
              <div className="col-lg-8 col-sm-12 footer-col-4">
                <form
                  role="search"
                  method="POST"
                  action="https://topgunshootingacademy.com/contact-us/save"
                  className="bg-primary p-a20 text-white m-t15"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="Olj7RwADbrgOxhbOcQYepg9SmIedMDq52JPJdT5Y"
                  />
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <h2 className="m-tb0 font-40">Subscribe</h2>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                      <div className="m-tb16">
                        <ul className="dez-social-icon border dez-social-icon-lg">
                          <li>
                            <Link
                              href="https://www.facebook.com/TopGunShootingAcademy"
                              className="fb-btn"
                              target="_blank"
                              aria-label="Facebook"
                            >
                              {/* Facebook SVG */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.06v-2.9h2.24V9.41c0-2.22 1.32-3.45 3.34-3.45.97 0 1.99.17 1.99.17v2.19h-1.12c-1.1 0-1.44.68-1.44 1.38v1.65h2.45l-.39 2.9h-2.06v7.03c4.78-.81 8.44-4.94 8.44-9.93z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://twitter.com/TopGunIndia"
                              className="tw-btn"
                              target="_blank"
                              aria-label="Twitter"
                            >
                              {/* Twitter SVG */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.73 1.04C18.1 4.5 17 4 15.82 4c-2.24 0-4.06 1.82-4.06 4.06 0 .32.04.64.11.94C7.72 9.86 4.1 7.9 1.67 4.93c-.35.61-.55 1.32-.55 2.08 0 1.43.73 2.69 1.84 3.44-.68-.02-1.32-.21-1.88-.52v.05c0 2.01 1.43 3.69 3.32 4.07-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.6 2.03 2.76 3.82 2.79-1.4 1.1-3.16 1.76-5.07 1.76-.33 0-.65-.02-.97-.06 1.81 1.16 3.96 1.84 6.27 1.84 7.53 0 11.66-6.24 11.66-11.65 0-.18-.01-.36-.02-.54.8-.57 1.5-1.28 2.05-2.1z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.linkedin.com/topgun.co"
                              className="link-btn"
                              target="_blank"
                              aria-label="LinkedIn"
                            >
                              {/* LinkedIn SVG */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18.34H5.67V10.5h2.67v7.84zM7 9.3a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zm11.33 9.04h-2.67v-3.85c0-.92-.02-2.09-1.27-2.09-1.27 0-1.46.99-1.46 2.01v3.93h-2.67V10.5h2.56v1.08h.04c.36-.68 1.25-1.4 2.57-1.4 2.74 0 3.25 1.8 3.25 4.14v3.92z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="m-b15">
                    <div className="dzSubscribeMsg"></div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="form-control"
                      placeholder="Email Address"
                      pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="site-button button-3d gray btn-block"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
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
