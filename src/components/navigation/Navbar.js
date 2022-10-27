import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="../../../public/assets/icons/title-icon.ico" alt="" />
          Recinder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Finder
            </a>
            <a className="nav-item nav-link" href="#">
              About us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
