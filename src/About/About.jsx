import "./About.css";
import { HeroAbout } from "./HeroAbout";
import { Profiles } from "./Profiles";

const About = () => {
  return (
    <section className="about-main">
      <HeroAbout />
      <Profiles />
    </section>
  );
};

export { About };
