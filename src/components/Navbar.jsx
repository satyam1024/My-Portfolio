import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling && "bg-gradient-to-b from-[#10e956] to-transparent shadow-lg"
      } text-white fixed w-full top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className="text-white hover:text-blue-600 transition">
            Satyam's Portfolio
          </a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            About
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
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
