import "./style.css";

export default function Header(props) {
  const moonIcon = "assets/moon.png";
  const sunIcon = "assets/sun.png";

  return (
    <header className={props.isDarkMode ? "light-mode" : "dark-mode"}>
      <img className="logo-header" src="assets/logo.png" alt="Logo" />
      <button
        onClick={props.toggleDarkMode}
        className={
          props.isDarkMode ? "btn btn-light-mode" : "btn btn-dark-mode"
        }
      >
        <img src={props.isDarkMode ? moonIcon : sunIcon} alt="moon icon" />
      </button>
    </header>
  );
}
