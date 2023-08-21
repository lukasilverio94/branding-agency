import bannerImage from "../../imageBanner/banner.png"; // Use relative import path
import "./style.css";

export default function BannerSection() {
  return (
    <section id="banner-container" className="bg-dark-mode">
      <div
        className="img-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "50%",
          objectFit: "cover",
        }}
      >
        {/* banner img go here at css */}
      </div>

      <div className="banner-content">
        <p>branding / ui / ux /tecnologia</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
