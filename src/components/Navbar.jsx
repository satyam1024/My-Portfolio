import { useState, useEffect } from "react";
import ScrollLineScanner from "./ScrollLine";

const Navbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / documentHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`text-white fixed w-full bg-green-800 top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="  px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="text-white hover:text-blue-600 transition">
            Satyam's Portfolio
          </a>
        </div>
        <div className="space-x-6 mr-10 hidden md:flex">
          <a
            href="#about"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 gradient-background transition-all duration-300"
        style={{
          width: `${scrollPercentage}%`,
        }}
      ></div>
      {/* <ScrollLineScanner /> */}
    </nav>
  );
};

export default Navbar;
