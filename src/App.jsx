import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Footer from "./sections/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If scrolled close to the bottom of the page, activate footer
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 80
          ) {
            setActiveSection("footer");
            ticking = false;
            return;
          }

          const sections = document.querySelectorAll("section[id], footer[id]");
          let current = "";

          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 130;
            const sectionHeight = section.offsetHeight;

            if (
              window.scrollY >= sectionTop &&
              window.scrollY < sectionTop + sectionHeight
            ) {
              current = section.getAttribute("id");
            }
          });

          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <Menu />
      <Footer />
    </>
  );
};

export default App;
