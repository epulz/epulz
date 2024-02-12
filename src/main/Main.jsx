import { Hero } from "./Hero";
import { ComingSoonPage } from "./ComingSoonPage";
import { TechnicalEvents } from "./TechnicalEvents";
import { NonTechnicalEvents } from "./NonTechnicalEvents";
import { Others } from "./Others";

function Main() {
  return (
    <>
      <Hero />
      <ComingSoonPage />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <Others />
    </>
  );
}

export default Main;
