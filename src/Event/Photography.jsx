/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Photography = () => {
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
          <h1 className="text-center tech-title">Photography</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>
                    Journey into the realm of visual storytelling, where every
                    click immortalizes a fragment of time
                  </li>
                  <li>
                    In this captivating event, photographers wield their lenses
                    like magicians.
                  </li>
                  <li>
                    Transforming ordinary scenes into extraordinary narratives.
                  </li>
                  <li>
                    Join us as we explore the world through the eyes of the lens
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
                  <li>Maximum participants 1</li>
                  <li>
                    There will be 2 rounds, <br />
                    <strong>Round 1</strong> <br />* Participants must submit
                    their Photo within 25/02/2024 <br />* Shortlisted
                    Participants will be notified by next day through their
                    registered e-mail
                  </li>
                  <li>
                    <strong>Round 2</strong> <br />
                    * Shorlisted Participants are eligible for 2nd round <br />*
                    2nd round will be ofline mode, the participants are ask to
                    take photo's inside the campus and they will allowed 30 mins
                    for editing
                  </li>
                  <li>Certificates will be given for winner</li>
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
                  *No registration fee for other state's colleges
                </p>
                <ul role="list" className="card__bullets flow">
                  <li>Santhosh - 6383880199</li>
                  <li>Bharath - 9626915526</li>
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

export default Photography;
