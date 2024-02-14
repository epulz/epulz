/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Dumb = () => {
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
          <h1 className="text-center tech-title">Dumb Charades</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>
                    In the hush of anticipation, silence becomes the stage for
                    creativity to flourish
                  </li>
                  <li>
                    Dumb Charades transcends words, transforming gestures into a
                    vibrant tapestry of expression
                  </li>
                  <li>
                    Join us for an electrifying journey where imagination reigns
                    supreme, and each gesture tells a tale of wit and ingenuity
                  </li>
                </ul>
                target="_blank"
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
                  <li>Maximum participants in the team is 2 or 3</li>
                  <li>
                    Participants must submit their research abstract within
                    25/02/2024
                  </li>
                  <li>
                    Shortlisted particpants will engage in a Q&amp; sessions
                    with the judges
                  </li>
                  <li>
                    Prizes will be given for winner of ₹xxxx and for runner
                    ₹xxxx (Not yet decided, will be updated soon)
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
                <h2 className="card__heading">Contact</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>Vignesh</li>
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

export default Dumb;
