import MobileNav from "../components/MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand logo" href="#hero">
            Tandoori & Grill
          </a>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>

              {/* <li className="nav-item">
              <a className="nav-link" href="reservation.html">Reservation</a>
            </li> */}

              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <MobileNav />
    </>
  );
};

export default Navbar;
