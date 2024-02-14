/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import menu from "../assets/Nav/menu-bar.png";
import cross from "../assets/Nav/shape.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <button className="navbar-brand brand-btn" href="#">
          EPULZ
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
        >
          <span>
            <img src={menu} alt="menu" width={30} height={30} />
          </span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${
            isOffcanvasOpen ? "show" : "close"
          }`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              className="offcanvas-title off-title-btn"
              id="offcanvasNavbarLabel"
            >
              EPULZ
            </button>
            <button
              className="nav-close"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeOffcanvas}
            >
              <img src={cross} alt="menu" width={40} height={40} />
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <Link to="/epulz" onClick={closeOffcanvas}>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link active mx-4"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/epulz/about" onClick={closeOffcanvas}>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link active mx-4"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </Link>
              <Link to="/epulz/events" onClick={closeOffcanvas}>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link active mx-4"
                    aria-current="page"
                    href="#"
                    onClick={closeOffcanvas}
                  >
                    Events
                  </a>
                </li>
              </Link>
              <Link to="/epulz/accomodation" onClick={closeOffcanvas}>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link active mx-4"
                    aria-current="page"
                    href="#"
                    onClick={closeOffcanvas}
                  >
                    Accomodations
                  </a>
                </li>
              </Link>
              <Link to="/events" onClick={closeOffcanvas}>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a
                    className="nav-link active mx-4"
                    aria-current="page"
                    href="#"
                    onClick={closeOffcanvas}
                  >
                    Contact Us
                  </a>
                </li>
              </Link>
            </ul>
            <form className="d-flex justify-content-center align-items-center mt-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdKmxqrnh2SI2odNGcbtgP0yij6TFQ6UBzchg8pCfsQZGYZLQ/viewform?usp=sf_link"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <button
                  className="btn rounded-pill px-4 py-1 me-4 mb-3"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <strong>Register</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
