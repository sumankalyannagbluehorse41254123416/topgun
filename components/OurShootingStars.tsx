"use client";

import Image from "next/image";

export default function OurShootingStars() {
  const stars = [
    {
      name: "Shaurya Sarin",
      role: "Student",
      img: "/images/1656314962492.jpg",
    },
    {
      name: "Paarth Makhija",
      role: "Student",
      img: "/images/1656315003895.jpg",
    },
    {
      name: "Shreya Saksena",
      role: "Student",
      img: "/images/1656315049408.jpg",
    },
    {
      name: "Visnu Shivaraj Pandian",
      role: "Student",
      img: "/images/1649838134903.jpg",
    },
  ];

  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        {/* === Section Header === */}
        <div className="section-head text-center">
          <h2 className="h2">OUR SHOOTING STARS</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
          <p>.</p>
        </div>

        {/* === Stars Grid === */}
        <div className="section-content text-center">
          <div className="row">
            {stars.map((star, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="dez-box m-b30 dez-img-effect vertical-pan dez-staff">
                  <div className="dez-media vertical-pan dez-img-effect">
                    <a href="javascript:void(0)">
                      <Image
                        src={star.img}
                        alt={star.name}
                        width={480}
                        height={430}
                        className="media-images"
                      />
                    </a>
                  </div>

                  <div className="p-a15 bg-primary text-white dez-team">
                    <h4 className="dez-title text-capitalize m-t0">
                      {star.name}
                    </h4>
                    <div className="dez-separator-outer">
                      <div className="dez-separator bg-white style-liner"></div>
                    </div>
                    <span className="dez-member-position">{star.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
