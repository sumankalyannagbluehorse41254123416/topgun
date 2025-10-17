"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MediaCoverageSection({
  coverages = [
    {
      title: "TopGun shooting academy is a factory for producing Champions",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1707140363302.jpg",
      link: "",
      source: "",
      sourceLogo: "",
    },
    {
      title: "30 medals for Topgun Shooting Academy at Delhi state meet",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563018301.jpg",
      link: "https://www.google.com/amp/s/m.timesofindia.com/sports/more-sports/shooting/30-medals-for-topgun-shooting-academy-at-delhi-state-meet/amp_articleshow/88770798.cms",
      source: "TOI",
      sourceLogo: "https://wip.tezcommerce.com:3304/admin/module/53/1674484617152.png",
    },
    {
      title: "TopGun marksmen dominate Karni Singh shooting meet",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563103941.jpg",
      link: "https://www.indiatoday.in/pti-feed/story/topgun-marksmen-dominate-karni-singh-shooting-meet-640038-2016-07-13",
      source: "INDIA TODAY",
      sourceLogo: "https://wip.tezcommerce.com:3304/admin/module/53/1651215997205.jpg",
    },
    {
      title: "TopGun marksmen dominate inter-school Delhi shooting meet",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563117877.jpg",
      link: "https://www.business-standard.com/article/pti-stories/topgun-marksmen-dominate-inter-school-delhi-shooting-meet-115082400977_1.html",
      source: "BS NEWS",
      sourceLogo: "https://wip.tezcommerce.com:3304/admin/module/53/1651216028123.png",
    },
    {
      title: "Delhi's 65-year-old shooter sets national record",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1665466640999.jpg",
      link: "https://timesofindia.indiatimes.com/sports/more-sports/shooting/delhis-65-year-old-shooter-sets-national-record/articleshow/56649912.cms",
      source: "TOI",
      sourceLogo: "https://wip.tezcommerce.com:3304/admin/module/53/1674483550871.png",
    },
    {
      title: "Shooters of Top Gun Academy excel in state championship",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563750673.jpg",
      link: "",
      source: "",
      sourceLogo: "",
    },
    {
      title: "Shooters of Top Gun Academy won 12 medals.",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563818678.jpg",
      link: "",
      source: "",
      sourceLogo: "",
    },
    {
      title: "Top Gun Academy is a one-stop destination to learn shooting.",
      image: "https://wip.tezcommerce.com:3304/admin/module/53/1674563838876.jpg",
      link: "",
      source: "",
      sourceLogo: "",
    },
  ],
}) {
  return (
    <section className="section-full bg-white content-inner pt-0">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center mb-10">
          <h2 className="h2">Media Coverage</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
        </div>

        {/* Media Coverage Cards */}
        <div className="section-content text-center">
          <div className="row justify-center">
            {coverages.map((item, index) => (
              <div key={index} className="col-lg-4 col-sm-6 mb-4">
                <div className="dez-box dez-staff border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
                  <div className="dez-media relative overflow-hidden">
                    <Link href={item.link || "#"} target="_blank">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="media-images w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  </div>

                  <div className="dez-media-medal p-4">
                    <div className="dez-media-text mb-3">
                      <Link
                        href={item.link || "#"}
                        target="_blank"
                        className="font-semibold text-lg text-gray-800 hover:text-primary transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    </div>

                    {item.source && (
                      <div className="dez-media-check text-sm text-gray-600">
                        <p className="flex items-center justify-center gap-2">
                          Read On
                          <Link
                            href={item.link || "#"}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {item.sourceLogo && (
                              <Image
                                src={item.sourceLogo}
                                alt={item.source}
                                width={24}
                                height={24}
                                className="rounded-full object-contain toi"
                              />
                            )}
                            {item.source}
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
