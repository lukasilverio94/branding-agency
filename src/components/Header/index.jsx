import { useState } from "react";
import "./style.css";

export default function Header() {
  const [isDarkMode, setIsDarkmode] = useState(false);

  const moonIcon = "assets/moon.png";
  const sunIcon = "assets/sun.png";

   const toggleDarkMode = () => {
    setIsDarkmode(!isDarkMode);
  };

  return (
    <header className={isDarkMode ? "dark-mode" : "light-mode"}>
      <img className="logo-header" src="assets/logo.png" alt="Logo" />
      <button
        onClick={toggleDarkMode}
        className={isDarkMode ? "btn btn-dark-mode" : "btn btn-light-mode"}
      >
        <img src={isDarkMode ? sunIcon : moonIcon} alt="moon icon" />
      </button>
    </header>
  );
}
