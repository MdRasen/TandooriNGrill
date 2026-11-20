import MobileNav from "../components/MobileNav";

const Navbar = ({ activeSection, setActiveSection }) => {
  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);

    // Auto-close mobile collapse menu if open (on tablet/mobile)
    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse && navCollapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        navCollapse.classList.remove("show");
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a
            className="navbar-brand logo"
            href="#hero"
            onClick={() => handleNavLinkClick("hero")}
          >
            Tandoori & Grill
          </a>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                  onClick={() => handleNavLinkClick("hero")}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "menu" ? "active" : ""}`}
                  href="#menu"
                  onClick={() => handleNavLinkClick("menu")}
                >
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${activeSection === "footer" ? "active" : ""}`}
                  href="#footer"
                  onClick={() => handleNavLinkClick("footer")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Pass props to MobileNav */}
      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
};

export default Navbar;
