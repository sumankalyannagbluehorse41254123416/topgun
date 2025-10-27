"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faRecycle, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function ClassesRulesSection() {
  return (
    <div className="section-full content-area bg-white">
      <div className="container">
        <div className="row m-b50">
          <div className="col-lg-12 col-md-12">
            <h2 className="text-uppercase m-b11">House Rules for Classes</h2>
            <p className="m-b12">
              Routine and structure are important aspects of any classroom, and
              as a teacher you have to be consistent in how you apply the rules.
            </p>

            <div className="section-content">
              <div className="row">
                {/* === Sports Training === */}
                <div className="col-lg-4 col-sm-6 m-b30">
                  <div className="icon-bx-wraper center">
                    <div className="icon-bx-sm radius bg-primary m-b20">
                      <a href="#" className="icon-cell">
                        <FontAwesomeIcon icon={faCogs} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dez-tilte text-uppercase">
                        Sports Training
                      </h5>
                      <p>
                        We know that all elements of the shooting technique are
                        equally important and interconnected. The stability of
                        the rifle leads to more precise aiming and pulling of
                        the trigger at the right moment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Certification Course === */}
                <div className="col-lg-4 col-sm-6 m-b30">
                  <div className="icon-bx-wraper center">
                    <div className="icon-bx-sm radius bg-primary m-b20">
                      <a href="#" className="icon-cell">
                        <FontAwesomeIcon icon={faRecycle} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dez-tilte text-uppercase">
                        Certification Course
                      </h5>
                      <p>
                        Once you complete a course with us, you will receive a
                        certificate from our academy. It will be valid for all
                        kinds of shooting academies and training programs,
                        enriching your portfolio as well.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Pay & Play === */}
                <div className="col-lg-4 col-sm-6 m-b30">
                  <div className="icon-bx-wraper center">
                    <div className="icon-bx-sm radius bg-primary m-b20">
                      <a href="#" className="icon-cell">
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dez-tilte text-uppercase">Pay &amp; Play</h5>
                      <p>
                        Interested people can pay as per their training
                        requirements and courses. We will help them achieve
                        their dreams and guide them to play at our ranges.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === Project 10.9 === */}
                <div className="col-lg-4 col-sm-6 m-b30">
                  <div className="icon-bx-wraper center">
                    <div className="icon-bx-sm radius bg-primary m-b20">
                      <a href="#" className="icon-cell">
                        <FontAwesomeIcon icon={faTrophy} />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h5 className="dez-tilte text-uppercase">Project 10.9</h5>
                      <p>
                        Project 10.9 is a high-performance training program
                        specially designed and personally conducted by
                        international shooter Shimon Sharif to prepare shooters
                        for competitions throughout the year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
