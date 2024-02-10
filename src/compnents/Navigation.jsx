/* eslint-disable jsx-a11y/anchor-is-valid */
import menu from "../assets/menu-bar.png";
import cross from "../assets/shape.png";
import "./Navigation.css";

const Navigation = () => {
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
        >
          <span>
            <img src={menu} alt="menu" width={30} height={30} />
          </span>
        </button>
        <div
          className="offcanvas offcanvas-end"
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
            >
              <img src={cross} alt="menu" width={40} height={40} />
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active mx-4"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-4"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-4"
                  aria-current="page"
                  href="#"
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active mx-4"
                  aria-current="page"
                  href="#"
                >
                  Accomodations
                </a>
              </li>
            </ul>
            <form className="d-flex justify-content-center align-items-center mt-3">
              <button
                className="btn rounded-pill px-4 py-1 me-4 mb-3"
                type="button"
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
              <button
                className="btn rounded-pill px-4 py-1 mx-4 mb-3"
                type="button"
              >
                <strong>Contact</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
