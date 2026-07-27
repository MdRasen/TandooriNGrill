const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">Tandoori & Grill</h2>

            <p className="footer-text">
              Experience luxury dining with authentic Indian & South Asian
              cuisine, handcrafted dishes, and royal ambience.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div className="col-lg-2 col-md-6 quick-links-mob">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>

              <li>
                <a href="#menu">Menu</a>
              </li>

              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}

          <div className="col-lg-3 col-md-6">
            <h4>Contact</h4>

            <ul>
              <li>
                Via Domenico Scarlatti, 21, <br />
                20124 Milano, Italy
              </li>

              <li>+39 38943 15715</li>
            </ul>
          </div>

          {/* OPENING HOURS */}

          <div className="col-lg-3 col-md-6">
            <h4>Opening Hours</h4>

            <ul>
              <li>
                <strong>Open:</strong> Thursday – Friday
              </li>
              <li>
                <strong>Hours:</strong> 10:00 AM – 12:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tandoori & Grill. All Rights Reserved |
            Developed by{" "}
            <a href="https://mdrasen.bio.link/" target="_blank">
              devRasen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
