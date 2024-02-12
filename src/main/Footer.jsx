/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <button className="footer-brand footer-brand-text" href="#">
                EPULZ
              </button>
              <div className="icons">
                <a
                  href="https://mail.google.com/mail/u/0/?to=epulz2k24@gmail.com&su=Epulz+Symposium+TPGIT&body=Hey!,%0A%0AHow+can+I+help+you?.%0A%0ABest+regards,%0ADinesh+R&fs=1&tf=cm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-google"></i>
                  <span>|</span>
                  <span>epulz2k24</span>
                </a>
                <a
                  href="https://www.instagram.com/epulz_3.0?igsh=aDI5ZmpvZWZtdDNx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                  <span>|</span>
                  <span>epulz_3.0</span>
                </a>
                <a
                  href="https://github.com/epulz/epulz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github"></i>
                  <span>|</span>
                  <span>epulz</span>
                </a>
              </div>
            </div>
            <div className="col-lg-2 my-3">
              <h4 className="footer-headings">Epulz</h4>
              <ul className="footer-list">
                <Link to="/epulz">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/about">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      About us
                    </a>
                  </li>
                </Link>
                <Link to="/events">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Events
                    </a>
                  </li>
                </Link>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Accomodations
                  </a>
                </li>
                <li className="footer-list-item">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdKmxqrnh2SI2odNGcbtgP0yij6TFQ6UBzchg8pCfsQZGYZLQ/viewform?usp=sf_link"
                    className="footer-list-link"
                    target="_blank"
                  >
                    Register
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 my-3">
              <h4 className="footer-headings">Map</h4>
              <div
                className="map mt-3"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: "0",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4283703053516!2d79.11636252695311!3d12.880153700000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394400000001%3A0xf7139af5b9890941!2sThanthai%20Periyar%20Government%20Institute%20of%20Technology-Vellore!5e0!3m2!1sen!2sin!4v1707621332977!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    border: "0",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="col-lg-3 my-3 developers">
              <h4 className="footer-headings mt-2">Developers</h4>
              <ul className="footer-list">
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Dinesh R (IV)
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Sarankumar S (IV)
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Lathadevi B (III)
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Karthikeyan R (III)
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Siva M (III)
                  </a>
                </li>
                <li className="footer-list-item">
                  <a href="#" className="footer-list-link">
                    Jana K (III)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <hr className="footer-divider" />
                <div className="copyright">
                  <p className="copyright-text text-center">
                    Copyright © 2024 Team Devarriors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
