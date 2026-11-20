const MobileNav = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <a
        href="#hero"
        aria-label="Home"
        className={`nav-item-mobile ${activeSection === "hero" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "hero")}
      >
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </a>

      <a
        href="#menu"
        aria-label="Menu"
        className={`nav-item-mobile ${activeSection === "menu" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "menu")}
      >
        <i className="fa-solid fa-utensils"></i>
        <span>Menu</span>
      </a>

      <a
        href="#footer"
        aria-label="Contact"
        className={`nav-item-mobile ${activeSection === "footer" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "footer")}
      >
        <i className="fa-solid fa-circle-info"></i>
        <span>Contact</span>
      </a>
    </nav>
  );
};

export default MobileNav;
