import "./Accomodation.css";
import "../About/About.css";
import Hostel1 from "../assets/Accomodation/Hostel.jpg";
import Hostel2 from "../assets/Accomodation/Hostel2.jpg";
import Hostel3 from "../assets/Accomodation/Hostel3.jpg";
import Hostel4 from "../assets/Accomodation/Hostel4.jpg";
import Hostel5 from "../assets/Accomodation/Hostel5.jpg";

const Accomodation = () => {
  return (
    <div className="accomodation">
      <div className="container-fluid d-flex flex-column justify-content-end">
        <h1 className="text-center h1">ACCOMMODATION</h1>
        <p className="text-center p mt-5 mb-3">
          For participants coming from far distance & other states,
          <br />
          Accomodation(hostel) will be provided and free of cost for them.
        </p>
        <div className="m-auto">
          <div className="d-flex flex-row">
            <div className="mt-4">
              <i className="fa-regular fa-calendar icon iconshadow p-3" />
            </div>
            <div className="p-3">
              <p className="h4">DATE</p>
              <p className="p2">
                28 FEB 2024
                <br />
                Offline Registration Available
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="mt-4">
              <i className="fa-solid fa-location-dot icon iconshadow p-3" />
            </div>
            <div className="p-3">
              <p className="h4">LOCATION</p>
              <p className="p2">
                TPGIT <br />
                Boys Hostel &
                <br />
                Girls Hostel
              </p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="mt-4">
              <i className="fa-solid fa-utensils icon iconshadow p-3" />
            </div>
            <div className="p-3">
              <p className="h4">FOOD</p>
              <p className="p2">
                Lunch and Refreshment <br />
                will be provided.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-5 mt-5">
          <h4 className="h2">For More Details:</h4>
          <p1 className="p1">
            Sujith Barathi T - 8610395558
            <br />
            Jeevanantham - 6379298842
            <br />
            Robson Dias - 8940606391
          </p1>
        </div>
        <section id="gallery-carousel">
          <h1 id="staffHeading">Boys & Girls Hostel</h1>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img
                  src={Hostel1}
                  class="d-block w-100 slider-img "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src={Hostel2}
                  class="d-block w-100 slider-img "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src={Hostel3}
                  class="d-block w-100 slider-img "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src={Hostel4}
                  class="d-block w-100 slider-img "
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src={Hostel5}
                  class="d-block w-100 slider-img "
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accomodation;
