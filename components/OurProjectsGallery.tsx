"use client";

export default function OurProjectsGallery() {
  return (
    <div
      className="section-full bg-img-fix content-inner overlay-black-middle our-projects-galery"
      style={{
        backgroundImage: "url('/images/top.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="grid_box">
          {/* ==== Sport Training ==== */}
         
            <div className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal">
              <div className="sports-icon">
                {/* Image placeholder - commented out intentionally to match original */}
                {/* <Image
                  src="https://wip.tezcommerce.com:3304/admin/module/53/1649412071508.png"
                  alt="Sport Training"
                  width={85}
                  height={85}
                /> */}
              </div>
              <h4 className="text-capitalize">Sport Training</h4>
              <div className="dez-separator-outer">
                <div className="dez-separator bg-primary style-liner"></div>
              </div>
              <p className="m-b0">
                Professional coaching in a systematic way to help you reach your
                potential in the sport.
              </p>
            </div>
        

          {/* ==== Personal Training ==== */}
  
            <div className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal">
              <div className="sports-icon">
                {/* <Image
                  src="https://wip.tezcommerce.com:3304/admin/module/53/1649412108117.png"
                  alt="Personal Training"
                  width={85}
                  height={85}
                /> */}
              </div>
              <h4 className="text-capitalize">Personal Training</h4>
              <div className="dez-separator-outer">
                <div className="dez-separator bg-primary style-liner"></div>
              </div>
              <p className="m-b0">
                Professional coaching conducted personally by International
                shooters and highly experienced coaches.
              </p>
            </div>
      

          {/* ==== Pay & Play ==== */}
 
            <div className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal">
              <div className="sports-icon">
                {/* <Image
                  src="https://wip.tezcommerce.com:3304/admin/module/53/1652272622120.png"
                  alt="Pay & Play"
                  width={85}
                  height={85}
                /> */}
              </div>
              <h4 className="text-capitalize">Pay &amp; Play</h4>
              <div className="dez-separator-outer">
                <div className="dez-separator bg-primary style-liner"></div>
              </div>
              <p className="m-b0">Shooting session for recreational purpose.</p>
            </div>
       

          {/* ==== Training Certification ==== */}
   
            <div className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal">
              <div className="sports-icon">
                {/* <Image
                  src="https://wip.tezcommerce.com:3304/admin/module/53/1649412181769.png"
                  alt="Training Certification"
                  width={85}
                  height={85}
                /> */}
              </div>
              <h4 className="text-capitalize">Training Certification</h4>
              <div className="dez-separator-outer">
                <div className="dez-separator bg-primary style-liner"></div>
              </div>
              <p className="m-b0">
                Short certification course for gun safety and handling.
              </p>
            </div>
       
        </div>
      </div>
    </div>
  );
}
