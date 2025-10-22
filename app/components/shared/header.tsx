"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    // <header className="site-header header-style-6 dark mo-left">
    //   <div className="sticky-header main-bar-wraper navbar-expand-lg">
    //     <div className="main-bar clearfix">
    //       {/* === Top Bar === */}
    //       <div className="top-bar">
    //         <div className="container top-bar-crve">
    //           <div className="row justify-content-between">
    //             {/* Left Side - Email & Phone */}
    //             <div className="dez-topbar-left">
    //               <ul className="social-line text-center pull-right">
    //                 <li className="email">
    //                   <a href="javascript:void(0);">
    //                     <FontAwesomeIcon icon={faEnvelope} />
    //                     <span> shimonsharif@gmail.com </span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="javascript:void(0);">
    //                     <i className="fa fa-phone"></i>
    //                     <span> 011 4108 8098 </span>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>

    //             {/* Right Side - Social Icons */}
    //             <div className="dez-topbar-right">
    //               <ul className="social-line text-center pull-right">
    //                 <li>
    //                   <Link
    //                     href="https://www.facebook.com/TopGunShootingAcademy"
    //                     target="_blank"

    //                   />
    //                  <FontAwesomeIcon icon={faFacebook}/>
    //                 </li>
    //                 <li>
    //                   <Link
    //                     href="https://twitter.com/TopGunIndia"
    //                     target="_blank"
    //                     className="fa fa-twitter"
    //                   />
    //                         <FontAwesomeIcon icon={faTwitter}/>
    //                 </li>

    //                 <li>
    //                   <Link
    //                     href="https://www.linkedin.com/topgun.co"
    //                     target="_blank"

    //                   />
    //          <FontAwesomeIcon icon={faLinkedin}/>

    //                 </li>
    //                 <li>
    //                   <Link
    //                     href="https://www.instagram.com/topgunshootingacademy"
    //                     target="_blank"

    //                   />
    //                                           <FontAwesomeIcon icon={faInstagram}/>

    //                 </li>
    //                 {/* <li><a className="loginmodal" id="loginmodal">Login</a></li> */}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* === Main Header === */}
    //       <div className="header-bar">
    //         <div className="container clearfix">
    //           {/* Logo */}
    //           <div className="logo-header mostion">
    //             <Link href="https://topgunshootingacademy.com">
    //               <Image
    //                 src="https://topgunshootingacademy.com/image/topgunlogo.png"
    //                 width={193}
    //                 height={89}
    //                 alt="logo"
    //                 priority
    //               />
    //             </Link>
    //           </div>

    //           {/* Mobile Nav Toggle */}
    //           <button
    //             className="navbar-toggler collapsed navicon justify-content-end"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#navbarNavDropdown"
    //             aria-controls="navbarNavDropdown"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //           </button>

    //           {/* Navbar Placeholder */}
    //           <div
    //             className="header-nav navbar-collapse collapse justify-content-end"
    //             id="navbarNavDropdown"
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="site-header header-style-6 dark mo-left ">
      <div className=" sticky-header main-bar-wraper navbar-expand-lg navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="top-bar">
            <div className="container top-bar-crve">
              <div className="row justify-content-between">
                <div className="dez-topbar-left">
                  <ul className="social-line text-center pull-right">
                    <li className="email"><a href="javascript:void(0);"><i className="fa fa-envelope-o" /> <span> shimonsharif@gmail.com </span> </a></li>
                    <li><a href="javascript:void(0);"><i className="fa fa-phone" /> <span> 011 4108 8098 </span> </a></li>
                  </ul>
                </div>
                <div className="dez-topbar-right ">
                  <ul className="social-line text-center pull-right">
                    <li><a href="https://www.facebook.com/TopGunShootingAcademy" className="fa fa-facebook" target="blank" /></li>
                    <li><a href="https://twitter.com/TopGunIndia" className="fa fa-twitter" target="blank" /></li>
                    <li><a href="https://www.linkedin.com/topgun.co" className="fa fa-linkedin" target="blank" /></li>
                    <li><a href="https://www.instagram.com/topgunshootingacademy" className="fa fa-instagram" target="blank" /></li>
                    {/* <li><a class="loginmodal" id="loginmodal">Login</a> </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bar">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <a href="https://topgunshootingacademy.com">
                  <img src="https://topgunshootingacademy.com/image/topgunlogo.png" width={193} height={89} alt="logo" />
                </a>
              </div>
              <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span />
                <span />
                <span />
              </button>
              <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown"><div className="logo-header mostion" /><ul className="nav navbar-nav"><li className="active"><a id="Home-top" href="https://topgunshootingacademy.com/home">Home</a></li><li><a id="About-Us-top" href="https://topgunshootingacademy.com/about-us">About Us</a></li><li><a id="Branches-top" href="https://topgunshootingacademy.com/branches">Branches</a></li><li><a id="Classes-top" href="https://topgunshootingacademy.com/classes">Classes</a></li><li><a id="Our-Champions-top" href="https://topgunshootingacademy.com/our-champions">Our Champions</a></li><li><a id="Our-Gallery-top" href="https://topgunshootingacademy.com/our-gallery">Our Gallery</a></li><li><a id="Contact-Us-top" href="https://topgunshootingacademy.com/contact-us">Contact Us</a></li></ul></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <div>vvsdfffffffffffffffffff</div>

  );
}
