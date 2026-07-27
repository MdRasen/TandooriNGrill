const MobileNav = ({ activeSection, setActiveSection }) => {
  // Helper function to handle smooth scrolling in React
  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Stop the instant jump
    setActiveSection(sectionId); // Set the active state immediately

    // Find the section and scroll to it smoothly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mobile-bottom-nav">
      <a
        href="#hero"
        className={`nav-item-mobile ${activeSection === "hero" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "hero")}
      >
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </a>

      <a
        href="#menu"
        className={`nav-item-mobile ${activeSection === "menu" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "menu")}
      >
        <i className="fa-solid fa-utensils"></i>
        <span>Menu</span>
      </a>

      <a
        href="#footer"
        className={`nav-item-mobile ${activeSection === "footer" ? "active-mobile" : ""}`}
        onClick={(e) => handleNavClick(e, "footer")}
      >
        <i className="fa-solid fa-circle-info"></i>
        <span>Contact</span>
      </a>
    </div>
  );
};

export default MobileNav;
