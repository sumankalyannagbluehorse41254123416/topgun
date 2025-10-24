"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="section-content text-center">
        <div className="row">
          {/* === Left Column === */}
          <div className="col-lg-6 col-md-6">
            <div className="text-left">
              <h3 className="font-weight-600 m-t10">Topgun Shooting Academy</h3>
              <div>
                <p>
                  Topgun Shooting Academy, a brainchild of international shooter
                  Shimon Sharif, was launched in 2006 with an aim of
                  professionalizing coaching in shooting sport and making it
                  more accessible to the masses.
                </p>
                <p>
                  Given India&apos;s top-notch status in world shooting and the
                  regular roll-out of champions, there is a growing demand among
                  aficionados to be a part of this exciting journey. Add to it
                  the sport&apos;s profile which does not take into account age
                  — anyone from eight to sixty-plus can enlist, the road ahead
                  looks exciting for the sport. The future is promising but to
                  ensure that sound training is imparted, expert guidance is
                  essential. With an impressive record behind him, Shimon has
                  ensured that his trainees are sound in basics.
                </p>
                <p>
                  Shimon was the first rifle shooter from Delhi to represent
                  India at the Shooting World Cup and has over 100 medals to his
                  name. In 2003, he was adjudged the &ldquo;Best Rifle
                  Shooter&rdquo; and entered the Limca Book of Records. Like
                  Shimon&apos;s know-how, the ranges are equipped with the
                  latest technology and equipment, and the track record is
                  proof. Several shooters from the academy have already brought
                  laurels to the country.
                </p>
                <p>
                  The academy follows a systematic training plan and also
                  provides support during competitions in India and abroad.
                  World-class training and best coaches in the country train and
                  groom the shooters and ensure they achieve their potential.
                  The academy is always on the lookout for raw talent and
                  moulding them into world beaters.
                </p>
              </div>

              {/* === Small Images Row === */}
              <div className="row">
                {[
                  "/images/1664356245174.jpg",
                  "/images/1664356263436.jpg",
                  "/images/1664356281595.jpg",
                ].map((src, i) => (
                  <div className="col-lg-4 col-sm-4 col-4" key={i}>
                    <div className="dez-media dez-img-effect off-color">
                      <Image
                        src={src}
                        alt={`About image ${i + 1}`}
                        width={200}
                        height={200}
                        className="sport"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === Right Column === */}
          <div className="col-lg-6 col-md-6 m-b30">
            <div className="dez-box">
              <div className="dez-media dez-img-effect off-color">
                <Image
                  src="/images/1709644852988.jpeg"
                  alt="Topgun Shooting Academy"
                  width={555}
                  height={393}
                  className="w-100 h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
