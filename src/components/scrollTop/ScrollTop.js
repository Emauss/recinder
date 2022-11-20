import "../scrollTop/scrollTop.scss";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/fontawesome-free-solid";
import { useRef, useEffect } from "react";

const ScrollTop = () => {
  const ref = useRef(null);

  useEffect(() => {
    const scrollTopButton = document.getElementById("scrollTop");

    window.onscroll = function () {
      showScrollTopButton();
    };

    const showScrollTopButton = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    };
  }, []);

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  fontawesome.library.add(faArrowUp);

  return (
    <button
      ref={ref}
      type="button"
      id="scrollTop"
      className="scrollTop"
      onClick={scrollTop}
    >
      <FontAwesomeIcon icon="arrow-up" />
    </button>
  );
};

export default ScrollTop;
