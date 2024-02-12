import one from "../assets/About/gallery/1.jpg";
import two from "../assets/About/gallery/2.jpg";
import third from "../assets/About/gallery/3.jpg";
import four from "../assets/About/gallery/4.jpg";
import five from "../assets/About/gallery/5.jpg";
import six from "../assets/About/gallery/6.jpg";

const Gallery = () => {
  return (
    <section id="gallery-carousel">
      <h1 id="staffHeading">EPULZ 2K22</h1>
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src={one} class="d-block w-100 slider-img " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={two} class="d-block w-100 slider-img " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={third} class="d-block w-100 slider-img " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={four} class="d-block w-100 slider-img " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={five} class="d-block w-100 slider-img " alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={six} class="d-block w-100 slider-img" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export { Gallery };
