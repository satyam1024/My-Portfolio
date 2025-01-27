import React, { useState, useEffect } from "react";

const ScrollLineScanner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the percentage of the scroll position relative to the total scroll height
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);

  // Calculate the width of the line based on scroll
  const lineWidth = scrollPercentage * 100; // The line will expand as we scroll

  // Adjust the position of the scanner based on scroll position
  const scannerPosition = scrollPercentage * 100; // The scanner moves from left to right

  return (
    <div className="line-container">
      <div
        className="line"
        style={{
          width: `${lineWidth}%`, // Dynamically adjust width as we scroll
        }}
      >
        <div
          className="scanner"
          style={{
            left: `calc(${scannerPosition}% - 10px)`, // Adjust scanner's position based on scroll
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollLineScanner;
