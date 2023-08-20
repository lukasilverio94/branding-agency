import "./style.css";

export default function BannerSection() {
  return (
    <section id="banner-container" className="bg-light-mode">
      <div className="img-banner">{/* banner img go here at css */}</div>

      <div className="banner-content">
        <p>branding / ui / ux /tecnologia</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
