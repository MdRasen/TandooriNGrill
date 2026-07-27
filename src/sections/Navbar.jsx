import MobileNav from "../components/MobileNav";

const Navbar = ({ activeSection, setActiveSection }) => {
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
                <a
                  className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
                  href="#hero"
                  onClick={() => setActiveSection("hero")}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "menu" ? "active" : ""}`}
                  href="#menu"
                  onClick={() => setActiveSection("menu")}
                >
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "footer" ? "active" : ""}`}
                  href="#footer"
                  onClick={() => setActiveSection("footer")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Pass the props down to MobileNav as well */}
      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
};

export default Navbar;
