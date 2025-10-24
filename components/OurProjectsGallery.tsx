"use client";

export default function OurProjectsGallery() {
  const projects = [
    {
      title: "Sport Training",
      description:
        "Professional coaching in a systematic way to help you reach your potential in the sport.",
      // image: "https://wip.tezcommerce.com:3304/admin/module/53/1649412071508.png",
    },
    {
      title: "Personal Training",
      description:
        "Professional coaching conducted personally by International shooters and highly experienced coaches.",
      // image: "https://wip.tezcommerce.com:3304/admin/module/53/1649412108117.png",
    },
    {
      title: "Pay & Play",
      description: "Shooting session for recreational purpose.",
      // image: "https://wip.tezcommerce.com:3304/admin/module/53/1652272622120.png",
    },
    {
      title: "Training Certification",
      description: "Short certification course for gun safety and handling.",
      // image: "https://wip.tezcommerce.com:3304/admin/module/53/1649412181769.png",
    },
  ];

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
          {projects.map((item, index) => (
            <div
              key={index}
              className="border-1 p-a15 text-center text-white skew-triangle left-top hvr-wobble-horizontal"
            >
              <div className="sports-icon">
                {/* Uncomment for dynamic icons/images */}
                {/* <Image src={item.image} alt={item.title} width={85} height={85} /> */}
              </div>

              <h4 className="text-capitalize">{item.title}</h4>

              <div className="dez-separator-outer">
                <div className="dez-separator bg-primary style-liner"></div>
              </div>

              {item.description && <p className="m-b0">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
