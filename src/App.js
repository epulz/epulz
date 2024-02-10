import { Navigation } from "./main/Navigation";
import { Hero } from "./main/Hero";
import { ComingSoonPage } from "./main/ComingSoonPage";
import { TechnicalEvents } from "./main/TechnicalEvents";
import { NonTechnicalEvents } from "./main/NonTechnicalEvents";
import { Footer } from "./main/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ComingSoonPage />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <Footer />
    </>
  );
}

export default App;
