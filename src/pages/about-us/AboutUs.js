import "./aboutUs.scss";
import vegetables from "../../assets/images/vegetables.jpg";
import ExampleText from "../../components/additional/ExampleText";
import ReactDirective from "react-directive";
import { useState } from "react";
import CounterButton from "../../components/counterButton/CounterButton";

const AboutUs = () => {
  const [textCounter, setTextCounter] = useState(1);

  return (
    <section className="container my-5 px-md-0 px-4">
      <div className="row mb-5">
        <div className="col-md-6 pe-md-5">
          <h2 className="mb-4"> About us</h2>
          <ExampleText />
          <span className="buttonsWrapper">
            <CounterButton isNegative={true} counter={textCounter} setCounter={setTextCounter} />
            <CounterButton counter={textCounter} setCounter={setTextCounter} />
          </span>
          <span className="ms-3">{`${textCounter} articles`}</span>
        </div>
        <div className="col-md-6 d-flex align-items-center align-items-xl-start mt-3 mt-md-0">
          <img src={vegetables} alt="vegetables" />
        </div>
      </div>
      <ReactDirective>
        <ExampleText maxLength={815} data-react-for={textCounter} data-react-if={textCounter} />
      </ReactDirective>
    </section>
  );
};

export default AboutUs;
