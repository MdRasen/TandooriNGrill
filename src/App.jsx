import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Footer from "./sections/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Query sections and the footer that have IDs
      const sections = document.querySelectorAll("section[id], footer[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
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
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
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
