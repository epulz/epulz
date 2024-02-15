/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Scam = () => {
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
          <h1 className="text-center tech-title">Scam 2024</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>Enter the realm of strategic deception</li>
                  <li>Where perception is power and persuasion an art form</li>
                  <li>
                    In this provocative event, marketing maestros reveal the
                    secrets behind successful campaigns
                  </li>
                  <li>
                    Exploring the fine line between ingenuity and deception
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
                    This event is to test the advertising and marketing skills
                    of the participants
                  </li>
                  <li>
                    You will be provided with the idea of pitching a product
                  </li>
                  <li>
                    Prior preparation time will be given to the participants
                  </li>
                  <li>You need to pitch the product to the audience</li>
                  <li>You can use whatever details and lies they want to</li>
                  <li>This is to test the creativity of the students</li>
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
                  <li>Srinath - 6381540230</li>
                  <li>Makatan - 9488238548</li>
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

export default Scam;
