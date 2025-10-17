"use client";

import React from "react";
import Image from "next/image";
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
                              className="fa fa-facebook fb-btn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              href="https://twitter.com/TopGunIndia"
                              className="fa fa-twitter tw-btn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.linkedin.com/topgun.co"
                              className="fa fa-linkedin link-btn"
                              target="_blank"
                            ></Link>
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
                        <Link href="#" className="icon-cell">
                          <i className="fa fa-map-marker"></i>
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
                        <Link href="#" className="icon-cell">
                          <i className="fa fa-envelope"></i>
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
                        <Link href="#" className="icon-cell">
                          <i className="fa fa-mobile-phone"></i>
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
