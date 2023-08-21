import "./style.css";

export default function BannerSection() {

  const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/banner.png`;

  return (
    <section id="banner-container" className="bg-light-mode">
      <div
        className="img-banner"
         style={{
           backgroundImage: {backgroundImageUrl},
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           width: "50%",
           height: "100%",
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
