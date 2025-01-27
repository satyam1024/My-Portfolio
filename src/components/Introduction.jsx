import React, { useEffect, useRef } from "react";

function Introduction() {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ani");
          } else {
            entry.target.classList.remove("ani");
          }
        });
      },
      { threshold: 0.05 }
    );

    if (leftDivRef.current) observer.observe(leftDivRef.current);
    if (rightDivRef.current) observer.observe(rightDivRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      className="bg-[url('/purple.jpg')] w-[100vw] bg-cover overflow-hidden lg:bg-contain   text-white pt-32 py-16 px-8 md:px-16 lg:px-24 "
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Div */}
        <div
          ref={leftDivRef}
          className=" transform leftani transition-all duration-700 max-w-4xl text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hi, I'm Satyam Kathait</span>
            👋
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a 3rd-year Computer Science and Engineering student at Graphic
            Era Hill University. I specialize in building responsive and
            user-friendly applications with modern frameworks like React and
            React Native. Let's bring your ideas to life!
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="ml-4 inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Div */}
        <div
          ref={rightDivRef}
          className=" transform rightani transition-all duration-700 relative md:w-1/2 mt-8 md:mt-0"
        >
          <img
            className="ml-16 w-3/4 h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]"
            src="/developer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
