/* eslint-disable react/jsx-no-target-blank */
import "../main/TechnicalEvents.css";
import "../Events/Events.css";
import nontech from "../assets/NonTech/non-tech.mp4";
import cricket from "../assets/NonTech/cricket.jpg";
import market from "../assets/NonTech/market.jpg";
import photo from "../assets/NonTech/photo.jpg";
import { Link } from "react-router-dom";

const NonTechEvents = () => {
  return (
    <main className="non-main">
      <video autoPlay loop muted src={nontech} id="backVideo"></video>
      <h1 className="text-center tech-title">Non Technical Events</h1>
      <section className="card-area">
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--beach">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-fill-check card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                    <h2 className="card-front__heading">Scam 2024</h2>
                    <p className="card-front__text-price">(Marketing)</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--beach">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={market} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--beach">
                  Marketing Mavericks !
                </h3>
                <p className="inside-page__text">
                  Discover Marketing's Future: Scam 2024 Awaits You!
                </p>
                <Link
                  to="/epulz/event/scam-2024"
                  className="inside-page__btn inside-page__btn--beach"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Card: Project */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--ski">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-camera2 card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
                      <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
                    </svg>
                    <h2 className="card-front__heading">Photography</h2>
                    <p className="card-front__text-price">
                      (Capturing Natures)
                    </p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--ski">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={photo} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--ski">
                  Hello Shutterbugs!
                </h3>
                <p className="inside-page__text">
                  Capture moments, ignite creativity: Photography enthusiasts,
                  join us!
                </p>
                <Link
                  to="/epulz/event/photography"
                  className="inside-page__btn inside-page__btn--ski"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Card: Camping */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--camping">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-raised-hand card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                    <h2 className="card-front__heading">Bid Wars</h2>
                    <p className="card-front__text-price">(IPL Auction)</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--camping">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={cricket} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--camping">
                  Hey Auction Aces!
                </h3>
                <p className="inside-page__text">
                  Join the excitement: IPL Bid Wars Await You!
                </p>
                <Link
                  to="/epulz/event/bid-wars"
                  className="inside-page__btn inside-page__btn--camping"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export { NonTechEvents };
