/* eslint-disable jsx-a11y/no-redundant-roles */
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
                <h2 className="card__heading">Discription</h2>
                <p className="card__price">$9.99</p>
                <ul role="list" className="card__bullets flow">
                  <li>Access to standard workouts and nutrition plans</li>
                  <li>Email support</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, commodi?
                  </li>
                </ul>
                <a href="#basic" className="card__cta cta">
                  Get Started
                </a>
              </div>
              <div className="cards__card card">
                <h2 className="card__heading">Procedure</h2>
                <p className="card__price">$19.99</p>
                <ul role="list" className="card__bullets flow">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&amp;A sessions</li>
                </ul>
                <a href="#pro" className="card__cta cta">
                  Upgrade to Pro
                </a>
              </div>
              <div className="cards__card card">
                <h2 className="card__heading">Contact</h2>
                <p className="card__price">$29.99</p>
                <ul role="list" className="card__bullets flow">
                  <li>Access to all premium workouts and nutrition plans</li>
                  <li>24/7 Priority support</li>
                  <li>1-on-1 virtual coaching session every month</li>
                  <li>Exclusive content and early access to new features</li>
                </ul>
                <a href="#ultimate" className="card__cta cta">
                  Go Ultimate
                </a>
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
