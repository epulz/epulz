import "./About/About.css";
import { Gallery } from "./About/Gallery";
import { HeroAbout } from "./About/HeroAbout";
import { Profiles } from "./About/Profiles";

const About = () => {
  return (
    <section className="about-main">
      <HeroAbout />
      <Profiles />
      <Gallery />
    </section>
  );
};

export default About;
