const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7">
              <h1 className="hero-title">Experience The Taste Of Luxury</h1>

              <p className="hero-text">
                Fresh ingredients, delicious recipes, and unforgettable dining
                experience crafted for food lovers.
              </p>

              <div className="hero-buttons">
                <a href="#menu" className="btn hero-btn1">
                  {" "}
                  Explore Menu{" "}
                </a>

                <a href="tel:+393894315715" className="btn hero-btn2">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
