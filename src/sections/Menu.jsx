const Menu = () => {
  return (
    <>
      <section id="menu" className="category-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Premium Menu</h2>
            <p>
              Crafted with authentic Indian flavors and luxury presentation.
            </p>
          </div>
        </div>

        {/* ADDED data-filter attributes to buttons */}
        <div className="category-tabs">
          <button className="active" data-filter="all">
            All
          </button>
          <button data-filter="starters">Starters</button>
          <button data-filter="main-course">Main Course</button>
          <button data-filter="desserts">Desserts</button>
          <button data-filter="drinks">Drinks</button>
        </div>
        <div className="gold-line"></div>
      </section>

      <section className="food-section" id="menu">
        <div className="container">
          <div className="row g-4" id="food-grid">
            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="main-course"
            >
              <div className="food-card">
                <div className="food-img">
                  <img src="./images/menu/BEEF BIRYANI.jpg" alt="Biryani" />
                </div>
                <div className="food-content">
                  <h3>Hyderabadi Biryani</h3>
                  <p>
                    Aromatic basmati rice layered with rich spices and tender
                    meat.
                  </p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="main-course"
            >
              <div className="food-card">
                <div className="food-img">
                  <img
                    src="./images/menu/BUTTER CHICKEN.jpg"
                    alt="Butter Chicken"
                  />
                </div>
                <div className="food-content">
                  <h3>Butter Chicken</h3>
                  <p>
                    Creamy tomato gravy infused with butter and Indian spices.
                  </p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="starters"
            >
              <div className="food-card">
                <div className="food-img">
                  <img
                    src="./images/menu/CHICKEN TIKKA.jpg"
                    alt="Paneer Tikka"
                  />
                </div>
                <div className="food-content">
                  <h3>Paneer Tikka</h3>
                  <p>
                    Char-grilled paneer cubes marinated with rich Indian masala.
                  </p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="starters"
            >
              <div className="food-card">
                <div className="food-img">
                  <img
                    src="./images/menu/CHICKEN TANDOORI.jpg"
                    alt="Tandoori"
                  />
                </div>
                <div className="food-content">
                  <h3>Tandoori Platter</h3>
                  <p>Smoky tandoor specialties served with mint chutney.</p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="starters"
            >
              <div className="food-card">
                <div className="food-img">
                  <img
                    src="./images//menu/SHEEK KEBAB DI MANZO.jpg"
                    alt="Kebab"
                  />
                </div>
                <div className="food-content">
                  <h3>Mughlai Kebabs</h3>
                  <p>
                    Juicy royal kebabs infused with Mughlai flavors and spices.
                  </p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 menu-item-card"
              data-category="desserts"
            >
              <div className="food-card">
                <div className="food-img">
                  <img src="./images/menu/PANINO FALAFEL.jpg" alt="Falooda" />
                </div>
                <div className="food-content">
                  <h3>Royal Falooda</h3>
                  <p>Saffron infused falooda topped with nuts and kulfi.</p>
                  <div className="allergens-price-btn">
                    <span>
                      Allergens:
                      <div className="icons">
                        <img src="images/menu/icons/chilli-48.png" alt="" />
                        <img src="images/menu/icons/corn-48.png" alt="" />
                        <img src="images/menu/icons/egg-48.png" alt="" />
                        <img src="images/menu/icons/fish-48.png" alt="" />
                      </div>
                    </span>
                    <button>€ 10.00</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
