import { useState } from "react";

const CATEGORY_LABELS = {
  antipasti: "Antipasti",
  naan: "Naan & Pane",
  biryani: "Biryani",
  piatti_di_pollo: "Piatti Di Pollo",
  specialita: "Specialità",
  piatti_verdure: "Piatti Verdure",
  piatti_griglia: "Griglia & Tandoori",
  thali: "Thali",
  panino_kebab: "Panino & Piadina",
  dolci: "Dolci",
};

const formatCategoryName = (key) => {
  if (CATEGORY_LABELS[key]) return CATEGORY_LABELS[key];
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Menu = () => {
  // Grab the data from the global window object (loaded via /menu-data.js)
  const menuItems = window.AppMenuData || {};
  const categoryKeys = Object.keys(menuItems);

  // State to track the active filter (Defaults to the first category)
  const [filter, setFilter] = useState(
    categoryKeys.length > 0 ? categoryKeys[0] : "",
  );

  const categories = categoryKeys.map((key) => ({
    label: formatCategoryName(key),
    value: key,
  }));

  const activeItems = menuItems[filter] || [];

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

        {/* Dynamic Filter Buttons */}
        <div
          className="category-tabs"
          role="tablist"
          aria-label="Menu Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={filter === cat.value}
              className={filter === cat.value ? "active" : ""}
              onClick={() => setFilter(cat.value)}
              data-filter={cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="gold-line"></div>
      </section>

      <section className="food-section">
        <div className="container">
          <div className="row g-4" id="food-grid">
            {activeItems.map((item, index) => (
              <div
                key={`${filter}-${item.name}-${index}`}
                className="col-lg-4 col-md-6 menu-item-card"
                data-category={filter}
                style={{ animationDelay: `${Math.min(index * 40, 300)}ms` }}
              >
                <div className="food-card">
                  <div className="food-img">
                    <img src={item.imgPath} alt={item.name} loading="lazy" />
                  </div>
                  <div className="food-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="allergens-price-btn">
                      <span>
                        Allergens:
                        <div className="icons">
                          {item.allergens && item.allergens.length > 0 ? (
                            item.allergens.map((allergen, i) => (
                              <img
                                key={i}
                                src={allergen.imgPath}
                                alt={allergen.name}
                                title={allergen.name}
                              />
                            ))
                          ) : (
                            <span className="no-allergens">None</span>
                          )}
                        </div>
                      </span>
                      <span className="price-badge">
                        € {item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
