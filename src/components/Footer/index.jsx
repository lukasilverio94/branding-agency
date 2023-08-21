import "./style.css";

export default function Footer(props) {
  return (
    <footer className={props.isDarkMode ? "footer-light-mode" : "footer-dark-mode"}>
      <img className="footer-logo" src="assets/logo.png" alt="logo" />
      <p className="paragraph-limit">
        Ajudamos a criar uma personalidade digital construindo sua marca no
        ambiente online utilizando estratégias, ferramentas e tecnologias
        personalizadas.
      </p>
      <div className="social-icons">
        <img src="assets/facebook.png" alt="facebook icon" />
        <img src="assets/twitter.png" alt="twitter icon" />
        <img src="assets/linkedin.png" alt="linkedin icon" />
        <img src="assets/dribble.png" alt="dribble icon" />
        <img src="assets/behance.png" alt="behance icon" />
        <img src="assets/google-plus.png" alt="google plus icon" />
      </div>
      <div className="copyright-container">
        <p className="copyright">
          Copyright 2022 &copy; <span>Lucas Silverio</span>
        </p>
      </div>
    </footer>
  );
}
