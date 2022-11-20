import "./aboutUs.scss";
import vegetables from "../../assets/images/vegetables.jpg";
import ExampleText from "../../components/additional/ExampleText";

const AboutUs = () => {
  return (
    <section className="container my-5 px-md-0 px-4">
      <div className="row mb-5">
        <div className="col-md-6 pe-md-5">
          <h2 className="mb-4"> About us</h2>
          <ExampleText />
        </div>
        <div className="col-md-6 d-flex align-items-center align-items-xl-start">
          <img src={vegetables} alt="vegetables" />
        </div>
      </div>
      <ExampleText maxLength={1000} />
    </section>
  );
};

export default AboutUs;
