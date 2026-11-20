# Tandoori & Grill — Restaurant Web App

A modern, high-performance responsive web application and digital interactive menu for **Tandoori & Grill**, an authentic Indian & South Asian restaurant located in Milan, Italy.

Built with **React 19**, **Vite**, **Bootstrap 5**, and custom responsive CSS.

---

## 🌟 Key Features

- **Interactive Category Filtering:** Smooth category navigation across Antipasti, Naan & Pane, Biryani, Piatti di Pollo, Specialità, Piatti Verdure, Griglia & Tandoori, Thali, Panino & Piadina, and Dolci.
- **Dynamic Runtime Menu Data (`public/menu-data.js`):** Menu items, descriptions, allergen icons, and prices can be updated directly on the live server without requiring a rebuild or re-deployment.
- **Hardware-Accelerated Fluid Animations:** 60fps card fade-in entrance with staggered animation delays, smooth hover depth, and glassmorphic card styling.
- **Fully Responsive (Desktop, Tablet & Mobile):**
  - **Desktop:** Classic luxury dark-theme layout with top navigation bar and 3-column food grid.
  - **Tablet:** Adaptive navbar with auto-closing collapse drawer and 2-column food grid.
  - **Mobile:** App-like floating bottom navigation bar, horizontally scrollable category tabs, full-width price badges, and safe area spacing.
- **Word-Breaking & Typographic Safety:** Fluid typography (`clamp()`) and `overflow-wrap: break-word` preventing word-breaking bugs across screen widths.
- **Direct Table Booking & Calling:** Integrated `tel:` phone action (`+39 351 426 0729`) for instant reservation calls.
- **Allergen Badges:** Clear allergen icons (chilli, milk, egg, corn, peanuts, prawn, fish) with friendly fallbacks.
- **Accessible & SEO Ready:** Semantic HTML5 (`role="tablist"`, `aria-label`, `rel="noopener noreferrer"`) and localized meta description.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Bundler / Tooling:** Vite 8
- **Styling:** Pure CSS3 + Bootstrap 5.3 (Grid & Collapse) + FontAwesome 6
- **Code Quality:** ESLint 10 with React Hooks & React Refresh rules

---

## 📁 Project Structure

```text
TandooriNGrill/
├── public/
│   ├── images/
│   │   ├── favicon.png             # Site favicon
│   │   ├── hero-bg.jpg             # Hero background image
│   │   └── menu/                   # Menu item photographs
│   │       └── icons/              # Allergen icons (chilli, milk, corn, etc.)
│   └── menu-data.js                # Runtime menu catalog (window.AppMenuData)
├── src/
│   ├── components/
│   │   └── MobileNav.jsx           # Floating mobile bottom navigation bar
│   ├── sections/
│   │   ├── Hero.jsx                # Hero landing section with CTA buttons
│   │   ├── Menu.jsx                # Menu section with category tabs & cards
│   │   ├── Navbar.jsx              # Responsive header navbar
│   │   └── Footer.jsx              # Footer with contacts, hours, quick links
│   ├── App.css                     # Main styling, responsive queries & animations
│   ├── App.jsx                     # Root application component with scroll spy
│   ├── index.css                   # Global reset, typography, and smooth scroll
│   └── main.jsx                    # Application entry point
├── eslint.config.js                # ESLint flat configuration
├── index.html                      # HTML entry with metadata and scripts
├── package.json                    # Project dependencies and npm scripts
└── vite.config.js                  # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd TandooriNGrill

# Install dependencies
npm install
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local Vite development server with HMR |
| `npm run build` | Build optimized production bundle to `/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across code files to ensure clean syntax |

---

## 📝 Updating Menu Items

The menu is loaded at runtime from [`public/menu-data.js`](public/menu-data.js).

To add, edit, or remove items:
1. Open `public/menu-data.js`.
2. Locate the desired category (e.g., `antipasti`, `biryani`, `naan`, etc.).
3. Edit the properties:
   - `name`: Dish title
   - `imgPath`: Path relative to public root (e.g. `./images/menu/ITEM.jpg`)
   - `description`: Italian dish description
   - `allergens`: Array of allergen objects `[{ name: "milk", imgPath: "./images/menu/icons/milk-bottle-48.png" }]`
   - `price`: Number in Euros (e.g. `12.50`)
4. Save the file. Changes are immediately reflected upon refreshing the page.

---

## 📍 Restaurant Information

- **Address:** Via Domenico Scarlatti, 21, 20124 Milano, Italy
- **Phone:** [+39 351 426 0729](tel:+393514260729)
- **Hours:** Monday – Sunday: 11:00 AM – 11:30 PM

---

## 📄 License & Credits

Developed by [devRasen](https://mdrasen.bio.link/). All rights reserved © 2026 Tandoori & Grill.
