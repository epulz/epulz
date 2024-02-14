import { Link } from "react-router-dom";
import "./Others.css";
import { useState } from "react";

const Others = () => {
  const [isRetroBgShutdown, setIsRetroBgShutdown] = useState(false);

  const handleRetroBgClick = () => {
    setIsRetroBgShutdown(!isRetroBgShutdown);
  };
  return (
    <section className="others">
      <div className="others_container">
        <div className="container-fluid">
          <div class="row mb-3">
            <div class="d-flex col-lg-12 justify-content-center">
              <div class=" d-flex popular-headers mb-4">
                <div>
                  <h4 class="mt-3 popular-heading text-center">Others</h4>
                  <p class="popular-para">Touch the cards to know more</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="d-flex col-lg-4 justify-content-center mb-5">
              <div className="card-container">
                <div className="card h-100">
                  <div
                    id="retrobg"
                    className={isRetroBgShutdown ? "retrobg-shutdown" : ""}
                  >
                    <div id="retrobg-sky">
                      <div id="retrobg-stars">
                        <div
                          className="retrobg-star"
                          style={{
                            left: "5%",
                            top: "55%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "7%",
                            top: "5%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "10%",
                            top: "45%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "12%",
                            top: "35%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "15%",
                            top: "39%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "20%",
                            top: "10%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "35%",
                            top: "50%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "40%",
                            top: "16%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "43%",
                            top: "28%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "45%",
                            top: "30%",
                            transform: "scale( 3 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "55%",
                            top: "18%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "60%",
                            top: "23%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "62%",
                            top: "44%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "67%",
                            top: "27%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "75%",
                            top: "10%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "80%",
                            top: "25%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "83%",
                            top: "57%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "90%",
                            top: "29%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "95%",
                            top: "5%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "96%",
                            top: "72%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "98%",
                            top: "70%",
                            transform: "scale( 3 )",
                          }}
                        />
                      </div>
                      <div id="retrobg-sunWrap">
                        <div id="retrobg-sun" onClick={handleRetroBgClick} />
                      </div>
                      <div id="retrobg-mountains">
                        <div
                          id="retrobg-mountains-left"
                          className="retrobg-mountain"
                        />
                        <div
                          id="retrobg-mountains-right"
                          className="retrobg-mountain"
                        />
                      </div>
                      <div id="retrobg-cityWrap">
                        <div id="retrobg-city">
                          <div
                            style={{
                              left: "4.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "6.0%",
                              height: "50%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "8.0%",
                              height: "25%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "12.0%",
                              height: "30%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "13.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "17.0%",
                              height: "20%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "18.5%",
                              height: "70%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "20.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "21.5%",
                              height: "80%",
                              width: "2.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "25.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "28.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "30.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "35.0%",
                              height: "65%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "38.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "42.0%",
                              height: "60%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "43.0%",
                              height: "85%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "45.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "48.0%",
                              height: "25%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "50.0%",
                              height: "80%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "52.0%",
                              height: "32%",
                              width: "5.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "55.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "58.0%",
                              height: "45%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "61.0%",
                              height: "90%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "66.0%",
                              height: "99%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "69.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "73.5%",
                              height: "90%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "72.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "75.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "80.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "83.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "87.0%",
                              height: "60%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "93.0%",
                              height: "50%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "91.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "94.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "98.0%",
                              height: "35%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="retrobg-ground">
                      <div id="retrobg-linesWrap">
                        <div id="retrobg-lines">
                          <div id="retrobg-vlines">
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                          </div>
                          <div id="retrobg-hlines">
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                          </div>
                        </div>
                      </div>
                      <div id="retrobg-groundShadow" />
                    </div>
                  </div>
                  <div className="front">
                    <h1 class="glitch" data-text="About Us">
                      About Us
                    </h1>
                    <Link to="/epulz/about">
                      <button className="rounded-pill">
                        <div className="default-btn">
                          <span>Hey</span>
                          <svg
                            className="css-i6dzq1"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            strokeWidth={2}
                            stroke="#FFF"
                            height={20}
                            width={20}
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle r={3} cy={12} cx={12} />
                          </svg>
                        </div>
                        <div className="hover-btn">
                          <span>Click Here!</span>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex col-lg-4 justify-content-center mb-5">
              <div className="card-container">
                <div className="card">
                  <div
                    id="retrobg"
                    className={isRetroBgShutdown ? "retrobg-shutdown" : ""}
                  >
                    <div id="retrobg-sky">
                      <div id="retrobg-stars">
                        <div
                          className="retrobg-star"
                          style={{
                            left: "5%",
                            top: "55%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "7%",
                            top: "5%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "10%",
                            top: "45%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "12%",
                            top: "35%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "15%",
                            top: "39%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "20%",
                            top: "10%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "35%",
                            top: "50%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "40%",
                            top: "16%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "43%",
                            top: "28%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "45%",
                            top: "30%",
                            transform: "scale( 3 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "55%",
                            top: "18%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "60%",
                            top: "23%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "62%",
                            top: "44%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "67%",
                            top: "27%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "75%",
                            top: "10%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "80%",
                            top: "25%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "83%",
                            top: "57%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "90%",
                            top: "29%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "95%",
                            top: "5%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "96%",
                            top: "72%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "98%",
                            top: "70%",
                            transform: "scale( 3 )",
                          }}
                        />
                      </div>
                      <div id="retrobg-sunWrap">
                        <div id="retrobg-sun" onClick={handleRetroBgClick} />
                      </div>
                      <div id="retrobg-mountains">
                        <div
                          id="retrobg-mountains-left"
                          className="retrobg-mountain"
                        />
                        <div
                          id="retrobg-mountains-right"
                          className="retrobg-mountain"
                        />
                      </div>
                      <div id="retrobg-cityWrap">
                        <div id="retrobg-city">
                          <div
                            style={{
                              left: "4.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "6.0%",
                              height: "50%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "8.0%",
                              height: "25%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "12.0%",
                              height: "30%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "13.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "17.0%",
                              height: "20%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "18.5%",
                              height: "70%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "20.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "21.5%",
                              height: "80%",
                              width: "2.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "25.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "28.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "30.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "35.0%",
                              height: "65%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "38.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "42.0%",
                              height: "60%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "43.0%",
                              height: "85%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "45.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "48.0%",
                              height: "25%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "50.0%",
                              height: "80%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "52.0%",
                              height: "32%",
                              width: "5.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "55.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "58.0%",
                              height: "45%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "61.0%",
                              height: "90%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "66.0%",
                              height: "99%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "69.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "73.5%",
                              height: "90%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "72.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "75.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "80.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "83.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "87.0%",
                              height: "60%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "93.0%",
                              height: "50%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "91.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "94.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "98.0%",
                              height: "35%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="retrobg-ground">
                      <div id="retrobg-linesWrap">
                        <div id="retrobg-lines">
                          <div id="retrobg-vlines">
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                          </div>
                          <div id="retrobg-hlines">
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                          </div>
                        </div>
                      </div>
                      <div id="retrobg-groundShadow" />
                    </div>
                  </div>
                  <div className="front">
                    <h1 class="glitch" data-text="Events">
                      Events
                    </h1>
                    <Link to="/events">
                      <button className="rounded-pill">
                        <div className="default-btn">
                          <span>Hey</span>
                          <svg
                            className="css-i6dzq1"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            strokeWidth={2}
                            stroke="#FFF"
                            height={20}
                            width={20}
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle r={3} cy={12} cx={12} />
                          </svg>
                        </div>
                        <div className="hover-btn">
                          <span>Click Here!</span>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex col-lg-4 justify-content-center mb-5">
              <div className="card-container">
                <div className="card">
                  <div
                    id="retrobg"
                    className={isRetroBgShutdown ? "retrobg-shutdown" : ""}
                  >
                    <div id="retrobg-sky">
                      <div id="retrobg-stars">
                        <div
                          className="retrobg-star"
                          style={{
                            left: "5%",
                            top: "55%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "7%",
                            top: "5%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "10%",
                            top: "45%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "12%",
                            top: "35%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "15%",
                            top: "39%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "20%",
                            top: "10%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "35%",
                            top: "50%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "40%",
                            top: "16%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "43%",
                            top: "28%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "45%",
                            top: "30%",
                            transform: "scale( 3 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "55%",
                            top: "18%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "60%",
                            top: "23%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "62%",
                            top: "44%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "67%",
                            top: "27%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "75%",
                            top: "10%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "80%",
                            top: "25%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "83%",
                            top: "57%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "90%",
                            top: "29%",
                            transform: "scale( 2 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "95%",
                            top: "5%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "96%",
                            top: "72%",
                            transform: "scale( 1 )",
                          }}
                        />
                        <div
                          className="retrobg-star"
                          style={{
                            left: "98%",
                            top: "70%",
                            transform: "scale( 3 )",
                          }}
                        />
                      </div>
                      <div id="retrobg-sunWrap">
                        <div id="retrobg-sun" onClick={handleRetroBgClick} />
                      </div>
                      <div id="retrobg-mountains">
                        <div
                          id="retrobg-mountains-left"
                          className="retrobg-mountain"
                        />
                        <div
                          id="retrobg-mountains-right"
                          className="retrobg-mountain"
                        />
                      </div>
                      <div id="retrobg-cityWrap">
                        <div id="retrobg-city">
                          <div
                            style={{
                              left: "4.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "6.0%",
                              height: "50%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "8.0%",
                              height: "25%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "12.0%",
                              height: "30%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "13.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "17.0%",
                              height: "20%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "18.5%",
                              height: "70%",
                              width: "1.5%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "20.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "21.5%",
                              height: "80%",
                              width: "2.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "25.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "28.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "30.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "35.0%",
                              height: "65%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "38.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "42.0%",
                              height: "60%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "43.0%",
                              height: "85%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "45.0%",
                              height: "40%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "48.0%",
                              height: "25%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "50.0%",
                              height: "80%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "52.0%",
                              height: "32%",
                              width: "5.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "55.0%",
                              height: "55%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "58.0%",
                              height: "45%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "61.0%",
                              height: "90%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "66.0%",
                              height: "99%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "69.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "73.5%",
                              height: "90%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "72.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "75.0%",
                              height: "60%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "80.0%",
                              height: "40%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "83.0%",
                              height: "70%",
                              width: "4.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "87.0%",
                              height: "60%",
                              width: "3.0%",
                            }}
                            className="retrobg-building retrobg-antenna"
                          />
                          <div
                            style={{
                              left: "93.0%",
                              height: "50%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "91.0%",
                              height: "30%",
                              width: "4.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "94.0%",
                              height: "20%",
                              width: "3.0%",
                            }}
                            className="retrobg-building"
                          />
                          <div
                            style={{
                              left: "98.0%",
                              height: "35%",
                              width: "2.0%",
                            }}
                            className="retrobg-building"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="retrobg-ground">
                      <div id="retrobg-linesWrap">
                        <div id="retrobg-lines">
                          <div id="retrobg-vlines">
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                            <div className="retrobg-vline" />
                          </div>
                          <div id="retrobg-hlines">
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                            <div className="retrobg-hline" />
                          </div>
                        </div>
                      </div>
                      <div id="retrobg-groundShadow" />
                    </div>
                  </div>
                  <div className="front">
                    <h1 class="glitch" data-text="Rooms">
                      Rooms
                    </h1>
                    <button className="rounded-pill">
                      <div className="default-btn">
                        <span>Hey</span>
                        <svg
                          className="css-i6dzq1"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          strokeWidth={2}
                          stroke="#FFF"
                          height={20}
                          width={20}
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle r={3} cy={12} cx={12} />
                        </svg>
                      </div>
                      <div className="hover-btn">
                        <span>Click Here!</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Others };
