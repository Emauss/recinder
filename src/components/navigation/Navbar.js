import "./navbar.scss";
import logo from "../../assets/icons/favicon.ico";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
          Recinder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/finder">
              Finder
            </Link>
            <Link className="nav-item nav-link" to="/about-us">
              About us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
