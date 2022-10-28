import "./footer.scss";

const Footer = () => {
  return (
    <footer className="py-3 my-4 footer">
      <div className="container">
        <ul className="nav justify-content-center border-bottom borderColor pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Finder
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About us
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2022 Recinder, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
