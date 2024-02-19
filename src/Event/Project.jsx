/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import "./Event.css";

const Project = () => {
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
          <h1 className="text-center tech-title">Project Expo</h1>
          <div className="main__cards cards">
            <div className="cards__inner">
              <div className="cards__card card">
                <h2 className="card__heading">Description</h2>
                <p className="card__price"></p>
                <ul role="list" className="card__bullets flow">
                  <li>Step into a world where creativity knows no bounds</li>
                  <li>
                    At Project Expo, brilliance takes center stage as
                    groundbreaking ideas come to life
                  </li>
                  <li>
                    Explore a tapestry of innovation, where each project is a
                    testament to the limitless potential of human ingenuity
                  </li>
                  <li> Don't miss this unforgettable display of excellence</li>
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
                  <li>Block diagram must mention in the abstract</li>
                  <li>
                    What are the components and how much power supply needed has
                    to mention in the abstract
                  </li>
                  <li>
                    Abstract must be mailed to{" "}
                    <strong>epulz2k24@gmail.com</strong>
                  </li>
                  <li>Shortlisted students will have Q&amp;A sessions</li>
                  <li>
                    Prizes will be given for winner as Rs.2000, first runner as
                    Rs.1000 and second runner as ₹500
                  </li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKmxqrnh2SI2odNGcbtgP0yij6TFQ6UBzchg8pCfsQZGYZLQ/viewform?usp=sf_link"
                  className="card__cta cta"
                  target="_blank"
                >
                  Register Here
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
                  <li>Manoharan J R - 9487375373</li>
                  <li>Mohan P - 8248864258</li>
                  <li>Vetha Varma - 7904153062</li>
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

export default Project;
