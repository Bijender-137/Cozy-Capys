import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HeroSec from "./components/HeroSec";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import MyFooter from "./components/MyFooter";
import Impact from "./components/Impact";
import RoadMap from "./components/RoadMap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Preloader } from "./components/Preloader";
import { BackTop } from "./components/BackTop";
function App() {
  setTimeout(() => {
    AOS.init({
      disable: "mobile",
      once: true,
      duration: 1200,
    });
  }, 2500);

  return (
    <div className="overflow-hidden">
      <HeroSec />
      <AboutUs />
      <Impact />
      <RoadMap />
      <Faq />
      <MyFooter />
      <Preloader />
      <BackTop/>
    </div>
  );
}

export default App;
