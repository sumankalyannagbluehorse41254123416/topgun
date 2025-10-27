"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ChampionsContentSection() {
  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          {/* === Left Column === */}
          <div className="col-lg-9">
            <div>
              <h1 className="m-t0">OUR CHAMPION</h1>
              <div className="dez-separator bg-primary"></div>
              <p>
                <strong>
                  Top Gun is a shooting academy which was started by Shimon
                  Sharif to promote shooting as a sport.
                </strong>
              </p>
            </div>

            <div>
              <div className="row">
                {/* === Card 1 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun50.jpg"
                          alt="topgun50"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Pratyush Aman Barnik</Link>
                      </h4>
                      <p>
                        Pratyush Aman Barnik has been winning Gold medals at
                        various shooting competitions with shared rifles. He won
                        a Gold in Youth Men's 10m Air Rifle at the South Delhi
                        District Open Shooting Competition 2018,
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Card 2 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun48.jpg"
                          alt="topgun48"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Krishna Aggarwal</Link>
                      </h4>
                      <p>
                        Krishna Aggarwal of Don Bosco School for winning Silver
                        medal in Junior Men's 10m Air Rifle at the Delhi Inter
                        School Shooting Competition 2018.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Card 3 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun13.jpg"
                          alt="topgun13"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Visnu Shivaraj Pandian</Link>
                      </h4>
                      <p>
                        Visnu Shivaraj Pandian wins Bronze and a prize money of
                        $500 at the ‘Champion of Champions’ event of Indonesia
                        Open. The 16-year-old Visnu had earlier topped the
                        qualification with a score of 629.7 in 10m air rifle.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Card 4 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun49.jpg"
                          alt="topgun49"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Paarth Makhija</Link>
                      </h4>
                      <p>
                        Paarth Makhija for his 10m Air Rifle match tomorrow at
                        the ISSF Junior World Championship in Peru.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Card 5 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun10.jpg"
                          alt="topgun10"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Shaurya Sarin</Link>
                      </h4>
                      <p>
                        National Shooting: Shaurya Sarin, who has been trained
                        by TopGun Shooting Academy, wins Bronze in Junior Men's
                        50m Pistol.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Card 6 === */}
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      <Link href="#">
                        <Image
                          src="/images/topgun1.jpg"
                          alt="topgun1"
                          width={400}
                          height={300}
                          className="media-img"
                        />
                      </Link>
                    </div>
                    <div className="dez-info p-a30 bg-gray-gray">
                      <h4 className="dez-title m-t0">
                        <Link href="#">Shreya Saksena</Link>
                      </h4>
                      <p>
                        Shreya Saksena, who was identified & nurtured by, shot
                        620.0 to take the the third spot in Women's 50m Rifle
                        Prone T3 at the ongoing National Selection Trials in New
                        Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Right Sidebar === */}
          <div className="col-lg-3">
      <div className="icon-bx-wraper bx-style-1 p-a30 center m-b15">
        <div className="icon-bx-sm text-primary bg-white radius border-2 m-b20">
          <Link href="#" className="icon-cell">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <div className="icon-content">
          <h5 className="dez-tilte text-uppercase">Recent Highlight</h5>
          <p>
            Rising Covid cases has started impacting sports activities in
            the state capital once again. National athletics championships
            and national selection trials of shooting have been cancelled
            due to the rise in Covid cases
          </p>
        </div>
      </div>

      <div className="icon-bx-wraper bx-style-1 p-a30 center m-b15">
        <div className="icon-bx-sm text-primary bg-white radius border-2 m-b20">
          <Link href="#" className="icon-cell">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <div className="icon-content">
          <h5 className="dez-tilte text-uppercase">Recent Highlight</h5>
          <p>
            Rising Covid cases has started impacting sports activities in
            the state capital once again. National athletics championships
            and national selection trials of shooting have been cancelled
            due to the rise in Covid cases
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
