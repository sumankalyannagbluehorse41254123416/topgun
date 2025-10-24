"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoachingTeamSection() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <h3 className="h3">MEET OUR COACHING TEAM MEMBERS</h3>
          <div className="dez-separator bg-primary"></div>
          <p>
            Team Top Gun will provide an intensive, fast-paced, highly
            interactive and practical leadership development experience with
            state-of-the-art content.
          </p>
        </div>

        {/* Section Content */}
        <div className="section-content">
          <div className="members_flex">
            {/* Member 1 */}
            <div className="">
              <div className="dez-box">
                <div className="dez-media">
                  <Link href="">
                    <Image
                      src="/images/1651129988514.webp"
                      alt="Rajesh Kumar"
                      width={400}
                      height={400}
                      className="media-image w-full "
                    />
                  </Link>
                </div>
                <div className="dez-info p-a20 p-t40 border-1">
                  <h4 className="dez-title m-tb0">
                    <Link href="">Rajesh Kumar</Link>
                  </h4>
                  <div className="bg-primary skew-content-box">
                  
                  </div>
                  <p className="m-t10 m-b0">
                    Rajesh Kumar all the very best on World Haemophilia Day.
                    18-year-old Rajesh is battling this life long disease and
                    has already won 5 medals, played National Championship 2013
                    and is qualified for selection trials in his first year of
                    shooting. We are happy to support him in his quest for
                    glory.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="">
              <div className="dez-box">
                <div className="dez-media">
                  <Link href="">
                    <Image
                      src="/images/1651130083458.webp"
                      alt="Komal Shrivas"
                      width={400}
                      height={400}
                      className="media-image w-full "
                    />
                  </Link>
                </div>
                <div className="dez-info p-a20 p-t40 border-1">
                  <h4 className="dez-title m-tb0">
                    <Link href="">Komal Shrivas</Link>
                  </h4>
                  <div className="bg-primary skew-content-box">
                    <ul className="dez-social-icon">
                      <li>
                        <Link
                          className="fa fa-facebook"
                          href="https://www.facebook.com/TopGunShootingAcademy"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-twitter"
                          href="https://twitter.com/TopGunIndia"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/topgun.co"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-instagram"
                          href="https://www.instagram.com/topgunshootingacademy"
                          target="_blank"
                        ></Link>
                      </li>
                    </ul>
                  </div>
                  <p className="m-t10 m-b0">
                    Komal Shrivas shot 397/400 in 10m Air Rifle (highest score
                    among men and women) to win Gold at the Indian Revenue Open
                    Shooting Championship 2019.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="">
              <div className="dez-box">
                <div className="dez-media">
                  <Link href="">
                    <Image
                      src="/images/1651230676173.webp"
                      alt="Sapna Kumari"
                      width={400}
                      height={400}
                      className="media-image w-full "
                    />
                  </Link>
                </div>
                <div className="dez-info p-a20 p-t40 border-1">
                  <h4 className="dez-title m-tb0">
                    <Link href="">Sapna Kumari</Link>
                  </h4>
                  <div className="bg-primary skew-content-box">
                    <ul className="dez-social-icon">
                      <li>
                        <Link
                          className="fa fa-facebook"
                          href="https://www.facebook.com/TopGunShootingAcademy"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-twitter"
                          href="https://twitter.com/TopGunIndia"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/topgun.co"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-instagram"
                          href="https://www.instagram.com/topgunshootingacademy"
                          target="_blank"
                        ></Link>
                      </li>
                    </ul>
                  </div>
                  <p className="m-t10 m-b0">
                    Sapna Kumari has qualified for the Indian Team Selection
                    Trials in Youth Women&apos;s 10m Air Pistol at the 63rd
                    National Shooting Championship in Bhopal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
