"use client";

import Image from "next/image";
import Link from "next/link";

export default function BranchesSection() {
  return (
    <div className="clearfix">
      <div className="section-full content-inner">
        <div className="container">
          <div className="row">
            {/* === Raipur === */}
            <div className="col-lg-6 col-sm-6 m-b30">
              <div className="dez-box p-a20 border-1 bg-gray">
                <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                  <Image
                    src="/images/1649674289621.jpg"
                    alt="Raipur"
                    width={600}
                    height={400}
                    className="dez-img-effect-image"
                  />
                </div>
                <div className="dez-info p-t20 text-center">
                  <h4 className="dez-title m-t0 m-b10 text-capitalize">
                    <Link href="#">Raipur</Link>
                  </h4>
                  <h2 className="m-tb0">011-41088098</h2>
                  <Link
                    href="https://topgunshootingacademy.com/contact-us"
                    className="site-button m-t15"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* === Jaipur === */}
            <div className="col-lg-6 col-sm-6 m-b30">
              <div className="dez-box p-a20 border-1 bg-gray">
                <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                  <Image
                    src="/images/1649921793256.jpg"
                    alt="Jaipur"
                    width={600}
                    height={400}
                    className="dez-img-effect-image"
                  />
                </div>
                <div className="dez-info p-t20 text-center">
                  <h4 className="dez-title m-t0 m-b10 text-capitalize">
                    <Link href="#">Jaipur</Link>
                  </h4>
                  <h2 className="m-tb0">9414274171</h2>
                  <Link
                    href="https://topgunshootingacademy.com/contact-us"
                    className="site-button m-t15"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* === New Delhi === */}
            <div className="col-lg-6 col-sm-6 m-b30">
              <div className="dez-box p-a20 border-1 bg-gray">
                <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                  <Image
                    src="/images/1649674417837.png"
                    alt="New Delhi"
                    width={600}
                    height={400}
                    className="dez-img-effect-image"
                  />
                </div>
                <div className="dez-info p-t20 text-center">
                  <h4 className="dez-title m-t0 m-b10 text-capitalize">
                    <Link href="#">New Delhi</Link>
                  </h4>
                  <h2 className="m-tb0">011-41088098</h2>
                  <Link
                    href="https://topgunshootingacademy.com/contact-us"
                    className="site-button m-t15"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* === Gurgaon === */}
            <div className="col-lg-6 col-sm-6 m-b30">
              <div className="dez-box p-a20 border-1 bg-gray">
                <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                  <Image
                    src="/images/1649921820175.jpg"
                    alt="Gurgaon"
                    width={600}
                    height={400}
                    className="dez-img-effect-image"
                  />
                </div>
                <div className="dez-info p-t20 text-center">
                  <h4 className="dez-title m-t0 m-b10 text-capitalize">
                    <Link href="#">Gurgaon</Link>
                  </h4>
                  <h2 className="m-tb0">011-41088098</h2>
                  <Link
                    href="https://topgunshootingacademy.com/contact-us"
                    className="site-button m-t15"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* === Noida === */}
            <div className="col-lg-6 col-sm-6 m-b30">
              <div className="dez-box p-a20 border-1 bg-gray">
                <div className="dez-thum-bx dez-img-overlay1 dez-img-effect zoom">
                  <Image
                    src="/images/1649921847172.jpg"
                    alt="Noida"
                    width={600}
                    height={400}
                    className="dez-img-effect-image"
                  />
                </div>
                <div className="dez-info p-t20 text-center">
                  <h4 className="dez-title m-t0 m-b10 text-capitalize">
                    <Link href="#">Noida</Link>
                  </h4>
                  <h2 className="m-tb0">011-41088098</h2>
                  <Link
                    href="https://topgunshootingacademy.com/contact-us"
                    className="site-button m-t15"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
