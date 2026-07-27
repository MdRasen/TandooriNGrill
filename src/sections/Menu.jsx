import { useState, useEffect } from "react";
// import { menuItems } from "../constants/index";

// =========================
// Helper Component for Animation
// =========================
const AnimatedMenuCard = ({ itemCategory, filterValue, children }) => {
  // Check if this card matches the active filter on initial load
  const isVisible = filterValue === itemCategory;

  // Set the initial style based on whether it should be visible right away
  const [style, setStyle] = useState({
    display: isVisible ? "block" : "none",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.9)",
  });

  useEffect(() => {
    let timer;
    // Removed the "all" check completely
    if (filterValue === itemCategory) {
      // 1. Set display block immediately
      setStyle((prev) => ({ ...prev, display: "block" }));

      // 2. Small animation effect after 50ms
      timer = setTimeout(() => {
        setStyle({ display: "block", opacity: 1, transform: "scale(1)" });
      }, 50);
    } else {
      // 1. Start hiding animation immediately
      setStyle((prev) => ({ ...prev, opacity: 0, transform: "scale(0.9)" }));

      // 2. Wait 300ms for animation to finish before setting display: none
      timer = setTimeout(() => {
        setStyle((prev) => ({ ...prev, display: "none" }));
      }, 300);
    }

    // Cleanup timer on unmount or re-render
    return () => clearTimeout(timer);
  }, [filterValue, itemCategory]);

  return (
    <div
      className="col-lg-4 col-md-6 menu-item-card"
      data-category={itemCategory}
      style={style}
    >
      {children}
    </div>
  );
};

// =========================
// Main Menu Component
// =========================
const Menu = () => {
  // Grab the data from the global window object
  const menuItems = window.AppMenuData || {};
  const categoryKeys = Object.keys(menuItems);

  // State to track the active filter (Defaults to the first item: 'antipasti')
  const [filter, setFilter] = useState(
    categoryKeys.length > 0 ? categoryKeys[0] : "",
  );

  // Format object keys into readable tab labels (e.g., "piatti_di_pollo" -> "Piatti Di Pollo")
  const formatCategoryName = (key) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate category tabs dynamically (Removed the "All" tab)
  const categories = categoryKeys.map((key) => ({
    label: formatCategoryName(key),
    value: key,
  }));

  // Flatten the nested object into a single array of items, attaching their parent category
  const allFlattenedItems = Object.entries(menuItems).flatMap(
    ([category, items]) => items.map((item) => ({ ...item, category })),
  );

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
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.value}
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
            {/* Map through all flattened items dynamically */}
            {allFlattenedItems.map((item, index) => (
              <AnimatedMenuCard
                key={index}
                itemCategory={item.category}
                filterValue={filter}
              >
                <div className="food-card">
                  <div className="food-img">
                    <img src={item.imgPath} alt={item.name} />
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
                            <span
                              style={{
                                fontSize: "14px",
                                color: "#888",
                                marginLeft: "5px",
                              }}
                            >
                              None
                            </span>
                          )}
                        </div>
                      </span>
                      <button>€ {item.price.toFixed(2)}</button>
                    </div>
                  </div>
                </div>
              </AnimatedMenuCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
