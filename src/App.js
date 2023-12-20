import { useState } from "react";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <BannerSection isDarkMode={isDarkMode} />
      <WorkExperienceSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}

export default App;
