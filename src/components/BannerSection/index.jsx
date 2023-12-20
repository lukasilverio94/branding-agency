import bannerImage from "../../imageBanner/banner.png"; // Use relative import path
import "./style.css";

export default function BannerSection(props) {
  return (
    <section
      id="banner-container"
      className={props.isDarkMode ? "bg-light-mode" : "bg-dark-mode"}
    >
      <div
        className="img-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "50%",
          objectFit: "cover",
        }}
      ></div>

      <div className="banner-content">
        <p>branding / ui / ux /tecnologia</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
