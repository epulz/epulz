/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Mind = () => {
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
          <h1 className="text-center tech-title">Mind Unfolded</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>

                <ul role="list" className="card__bullets flow">
                  <li>
                    "Mind Unfolded" stands as a testament to scholarly
                    excellence
                  </li>
                  <li>
                    Each paper presented is a brushstroke on the canvas of human
                    understanding.
                  </li>
                  <li>
                    It is an event for celebration of curiosity, creativity, and
                    the relentless pursuit of truth.
                  </li>
                  <li>
                    Every presentation is a revelation, every discussion a
                    revelation, and every participant a beacon of intellectual
                    enlightenment.
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
                  <li>Maximum participants in the team is 2</li>
                  <li>
                    Participants must submit their research abstract within
                    25/02/2024
                  </li>
                  <li>Abstract must adhere to IEEE format</li>
                  <li>Abstract must be mailed to epulz2k24@gmail.com</li>
                  <li>Each team will have 5-15 minutes to present</li>
                  <li>Each team should bring the hard copy of the ppt.</li>
                  <li>
                    Shortlisted particpants will engage in a Q&amp;A sessions
                    with the judges
                  </li>
                  <li>
                    This event is going to conduct by two separate sections. So,
                    Both section of winners will be treated by prizes (So, 3 + 3
                    = 6 teams will get prize)
                  </li>
                  <li>
                    Prizes will be given for winner as ₹1500, first runner as
                    ₹1000 and second runner as ₹500
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
                  *No registration fee for other state's colleges
                </p>
                <ul role="list" className="card__bullets flow">
                  <li>Dinesh R - 7904873545</li>
                  <li>Saran Kumar S - 8248149420</li>
                  <li>Dilip Kumar R - 9843150807</li>
                  <li>Shalini</li>
                  <li>Bhargavi</li>
                  <li>Kalaivani</li>
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

export default Mind;
