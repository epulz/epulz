/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Brain = () => {
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
          <h1 className="text-center tech-title">Brain Buster</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>
                    Prepare for a battle of wits where only the sharpest minds
                    prevail
                  </li>
                  <li>
                    In this riveting technical quiz, knowledge becomes the
                    ultimate weapon
                  </li>
                  <li>
                    as contestants navigate a labyrinth of questions spanning
                    the vast landscape of technology
                  </li>
                  <li>
                    Join us for an exhilarating test of intellect and expertise
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
                <p className="card__price">Incharges</p>
                <ul role="list" className="card__bullets flow">
                  <li>Sujith Barathi T- 8610395558</li>
                  <li>Vanmozhi M </li>
                  <li>Nivedha S</li>
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

export default Brain;
