"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <div className="container">
      <div className="section-content">
        <div className="row">
          {/* Left Text Section */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h2>About Founder Shimon Sharif</h2>
            <div>
              <p>Shimon Sharif (born 7 February 1978) is an Indian sport shooter.</p>
              <p>
                He started his sports career in 1995. He has participated in several
                international shooting competitions including the ISSF World Cup in
                Korea in 2003.
              </p>
              <p>In 2007, he became the first Indian to compete in the Running Target event.</p>
              <p>
                He is named in the "Limca Book of Records" for floating India’s first
                website on shooting sports indianshooting.com. He conceptualized Online
                Shooting during pandemic Covid-19 and has so far organized few editions
                of international online shooting championships and a month-long Online
                Shooting League (OSL) which also became the World's first online league
                in an Olympic sport. Shimon is also the founder of Topgun Shooting
                Academy.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div>
              <Image
                src="/images/1651124759022.jpg"
                alt="About Founder Shimon Sharif"
                width={600}
                height={400}
                className="imges w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
