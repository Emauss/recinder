import "../counterButton/counterButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterButton = ({ isNegative = false, counter, setCounter }) => (
  <span className="articleButton">
    {isNegative ? (
      <button onClick={() => counter && setCounter(counter - 1)}>
        <FontAwesomeIcon icon="minus" />
      </button>
    ) : (
      <button onClick={() => setCounter(counter + 1)}>
        <FontAwesomeIcon icon="plus" />
      </button>
    )}
  </span>
);

export default CounterButton;
