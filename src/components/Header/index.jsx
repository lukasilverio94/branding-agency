
import "./style.css";

export default function Header() {
  return (
    <header className="light-mode">
      <img className="logo-header" src="assets/logo.png" alt="Logo" />
      <button className="btn btn-light-mode">
        <img  src="assets/moon.png" alt="moon icon" />
      </button>
    </header>
  );
}
