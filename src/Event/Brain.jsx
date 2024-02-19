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
                  <li>
                    Topics - Digital electronics, Microcontroller and
                    microprocessor, Embedded systems, Dsp, Wireless sensors
                  </li>
                  <li>
                    According to the number of participants, Batch will be
                    divided
                  </li>
                  <li>
                    In Round 1 we have 25 questions and each questions carry 2
                    marks And 30 sec per question
                  </li>
                  <li>
                    The maximum correct answered contestant will be selected for
                    Round 2
                  </li>
                  <li>
                    For round 2, we will conduct between winners of two batches.
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
                  For Individual Rs.200 per Head <br />
                  For Team Rs.300 per Team <br />
                  *No registration fee for other state college students
                </p>
                <ul role="list" className="card__bullets flow">
                  <li>Dinesh R - 7904873545</li>
                  <li>Saran Kumar S - 8248149420</li>
                  <li>Nishok - 9360715570</li>
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
