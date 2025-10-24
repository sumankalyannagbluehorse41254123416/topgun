interface HomeTopSectionProps {
  data?: {
    title?: string;
    shortDescription?: string;
    imageUrl?: string;
  };
}

const HomeTopSection: React.FC<HomeTopSectionProps> = ({ data }) => {
  const { title, shortDescription, imageUrl } = data || {};

  return (
    <div className="section-full bg-white content-inner">
      <div className="section-head text-center section-aboutus home_new_css">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{
            backgroundImage: `url(${imageUrl || "/images/shimonsharif.jpg"})`,
          }}
        >
          <h2 className="h2 text-uppercase">{title || "HOME TOPGUN"}</h2>
          <div className="dez-separator-outer">
            <div className="dez-separator bg-primary style-liner"></div>
          </div>
          <p>
            {shortDescription ||
              "India's Most Experienced and Trusted Shooting Academy"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
