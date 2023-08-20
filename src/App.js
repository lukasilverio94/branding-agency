import "./App.css";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <WorkExperienceSection/>
      <Footer/>
    </div>
  );
}

export default App;
