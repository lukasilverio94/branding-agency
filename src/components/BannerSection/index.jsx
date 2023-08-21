import "./style.css";

export default function BannerSection() {
  return (
    <section id="banner-container" className="bg-light-mode">
      <div
        className="img-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/banner.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "50%",
          heigh: "100%",
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
