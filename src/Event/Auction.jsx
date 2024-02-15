/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Auction = () => {
  return (
    <div className="ultimate-main">
      <div className="ultimate">
        <video
          autoPlay="true"
          loop="true"
          muted="true"
          src="https://www.1md.be/img/video/intro_bridge.mp4"
          id="backVideo"
        />
        <main className="mind-main flow">
          <h1 className="text-center tech-title">Bid Wars</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>
                    Step into the arena of sporting supremacy, where fortunes
                    are made and legends born
                  </li>
                  <li>
                    In this electrifying IPL auction, team owners engage in a
                    high-stakes battle for the cricketing elite
                  </li>
                  <li>
                    Witness the drama, the strategy, and the exhilarating
                    pursuit of victory unfold before your eyes
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKmxqrnh2SI2odNGcbtgP0yij6TFQ6UBzchg8pCfsQZGYZLQ/viewform?usp=sf_link"
                  className="card__cta cta"
                  target="_blank"
                >
                  Time To Start
                </a>
              </div>
              <div className="cards__card card">
                <h2 className="card__heading">Procedure</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>Total players in team - 11</li>
                  <li>Purse Amount - 100 Cr.</li>
                  <li>
                    Conditions: <br />* There should be at least 3 batsmen.{" "}
                    <br />
                    * There should be at least 3 bowlers. <br />
                    * There should be at least 1 allrounder. <br />
                    * There should be at least 1 wicketkeeper. <br />
                  </li>
                  <li>
                    Failure in fulfilling these criteria will lead to
                    disqualification of the team.
                  </li>
                  <li>
                    Till 1 Cr the bid will be increased by 10 lakhs,1-5 Cr the
                    bid will be increased by 20 lakhs,5 Cr and above the bid
                    will be increased by 50 lakhs.
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKmxqrnh2SI2odNGcbtgP0yij6TFQ6UBzchg8pCfsQZGYZLQ/viewform?usp=sf_link"
                  className="card__cta cta"
                  target="_blank"
                >
                  Register Now
                </a>
              </div>
              <div className="cards__card card">
                <h2 className="card__heading">Fees & Contact</h2>
                <p className="card__price">
                  For Individual ₹200 per Head <br />
                  For Team ₹300 per Team <br />
                  *No registration fee for other state's colleges
                </p>
                <ul role="list" className="card__bullets flow">
                  <li>Mohan P - 8248864258</li>
                  <li>Vignesh P - 9345595662</li>
                  <li>Giftson - 6379109681</li>
                  <li>Kaviyarasu - 6385746713</li>
                </ul>
                <Link to="/epulz/events" className="card__cta cta">
                  Other Events
                </Link>
              </div>
            </div>
            <div className="overlay cards__inner" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auction;
