import { ChiefGuest } from "./ChiefGuest";
import { CoverLetter } from "./CoverLetter";
import { HeroSouvneir } from "./HeroSouvneir";
import "./Souvneir.css";

const Souvneir = () => {
  return (
    <>
      <HeroSouvneir />
      <ChiefGuest />
      <CoverLetter />
    </>
  );
};

export default Souvneir;
