/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const CodeDilemma = () => {
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
          <h1 className="text-center tech-title">Code Dilemma</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>Enter the realm of algorithmic mastery</li>
                  <li>
                    Here code becomes poetry and bugs mere puzzles to solve
                  </li>
                  <li>
                    In this electrifying arena of code debugging, minds collide
                    in a symphony of logic and precision
                  </li>
                  <li>
                    Join us as we unravel the enigmas of programming and
                    celebrate the triumph of technical acumen
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
                  <li>Alloted duration will be 1 hour.</li>
                  <li>
                    Language to be used to build the logic is{" "}
                    <strong>C Language</strong>
                  </li>
                  <li>Total number of questions will be 5.</li>
                  <li>
                    Marks will be alloted based on the efficiency of your code{" "}
                    {""}
                    <strong>logical thing</strong>
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
                  <li>Vishnu Dharshan N- 9597767721</li>
                  <li>Manoharan J R - 9487375373</li>
                  <li>Nithin - 6381404807</li>
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

export default CodeDilemma;
