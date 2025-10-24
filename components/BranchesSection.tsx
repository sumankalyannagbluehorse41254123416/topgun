"use client";

import Image from "next/image";

export default function BranchesSection() {
  const branches = [
    {
      img: "/images/1709637837137.jpeg",
      title: "TOPGUN SHOOTING ACADEMY - KALKAJI",
    },
    {
      img: "/images/1709637887729.jpeg",
      title: "TOPGUN SHOOTING ACADEMY - GURGAON",
    },
    {
      img: "/images/1709639290848.jpg",
      title: "TOPGUN SHOOTING ACADEMY - RAIPUR",
    },
    {
      img: "/images/1709639351618.jpg",
      title: "TOPGUN SHOOTING ACADEMY - JAIPUR",
    },
  ];

  return (
    <section className="pt-5">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="h2 text-uppercase">BRANCHES</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="turfsList">
              {branches.map((branch, index) => (
                <li className="turf1" key={index}>
                  <div className="turf1-img">
                    <Image
                      src={branch.img}
                      alt={branch.title}
                      width={500}
                      height={300}
                      className=""
                    />
                  </div>
                  <div className="ccImage">
                    <Image
                      src="/images/topgunlogo.png"
                      alt={branch.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3>{branch.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
