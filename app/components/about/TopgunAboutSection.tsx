"use client";

import Image from "next/image";

export default function TopgunAboutSection() {
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-content">
          <div className="row">
            {/* Left Image */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div>
                <Image
                  src="/images/1649670121050.png"
                  alt="TOPGUN SHOOTING ACADEMY"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h2>TOPGUN SHOOTING ACADEMY</h2>
              <div>
                <p>
                  Topgun Shooting Academy provides professional training in
                  Olympic Shooting Sport. Topgun Shooting Academy, a brainchild
                  of international shooter Shimon Sharif, was launched in 2006
                  with an aim of professionalizing coaching in shooting sport
                  and making it more accessible to the masses. Given India’s
                  top-notch status in world shooting and the regular roll-out of
                  champions, there is a growing demand among aficionados to be a
                  part of this exciting journey. Add to it the sport’s profile
                  which does not take into account age — anyone from eight to
                  sixty-plus can enlist, the road ahead looks exciting for the
                  sport. The future is promising but to ensure that sound
                  training is imparted, expert guidance is essential. With an
                  impressive record behind him, Shimon has ensured that his
                  trainees are sound in basics. Shimon was the first rifle
                  shooter from Delhi to represent India at the Shooting World
                  Cup and has over 100 medals to his name. In 2003, he was
                  adjudged the “Best Rifle Shooter” and entered the Limca Book
                  of Records.
                </p>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                <p>
                  Like Shimon’s know-how, the ranges are equipped with the
                  latest technology and equipment, and the track record is
                  proof. Several shooters from the academy have already brought
                  laurels to the country. The academy follows a systematic
                  training plan and also provides support during competitions in
                  India and abroad. World-class training and best coaches in the
                  country train and groom the shooters and ensure they achieve
                  their potential.
                </p>
                <p>
                  Topgun’s journey started in 2006 by Shimon with the aim of
                  professionalizing coaching and making shooting accessible to
                  the masses. The academy is always on the lookout for raw
                  talent and moulding them into world beaters. The opening of
                  the new centres will be a shot in the arm in this endeavor and
                  Shimon’s vision of creating the next generation of champions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
