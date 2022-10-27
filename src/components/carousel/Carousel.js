import "../carousel/carousel.scss";
import carosuel_photo_1 from "../../assets/images/pakaos.jpeg";
import carosuel_photo_2 from "../../assets/images/background.webp";
import carosuel_photo_3 from "../../assets/images/menu.jpeg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active imgHeight">
          <img src={carosuel_photo_1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block contentCarousel">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item imgHeight">
          <img src={carosuel_photo_2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block contentCarousel">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item imgHeight">
          <img src={carosuel_photo_3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block contentCarousel">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
