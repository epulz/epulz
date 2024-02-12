import "./About.css";
import { Gallery } from "./Gallery";
import { HeroAbout } from "./HeroAbout";
import { Profiles } from "./Profiles";

const About = () => {
  return (
    <section className="about-main">
      <HeroAbout />
      <Profiles />
      <Gallery />
    </section>
  );
};

export { About };
