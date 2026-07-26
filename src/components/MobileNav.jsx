const MobileNav = () => {
  return (
    <div className="mobile-bottom-nav">
      <a href="#hero" className="nav-item-mobile">
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </a>

      {/* <a href="about.html" className="nav-item-mobile">
        <i className="fa-solid fa-circle-info"></i>
        <span>About</span>
      </a> */}

      <a href="#menu" className="nav-item-mobile active-mobile">
        <i className="fa-solid fa-utensils"></i>
        <span>Menu</span>
      </a>

      {/* <a href="gallery.html" className="nav-item-mobile">
        <i className="fa-solid fa-image"></i>
        <span>Gallery</span>
      </a> */}

      <a href="#footer" className="nav-item-mobile">
        <i className="fa-solid fa-circle-info"></i>
        <span>Contact</span>
      </a>
    </div>
  );
};

export default MobileNav;
