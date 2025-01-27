import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
function ProjectCard({ category, projects }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNavigation("next");
    }, 500000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const currentProject = projects[selectedProjectIndex];
  const shortDescription =
    currentProject.description.split(" ").slice(0, 15).join(" ") + "...";
  return (
    <div className="mb-8 ">
      <h3 className="text-2xl font-semibold text-blue-500 mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>

      <div className="relative flex flex-col gap-5 transition-transform duration-500 ease-in-out transform origin-center">
        <div className="bg-[#171718] p-10 flex flex-col lg:flex-row lg:space-x-4 rounded-lg shadow-lg overflow-hidden">
          <div className="flex-1 object-cover justify-center items-center">
            <img
              className=" h-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-120"
              src={currentProject.imageURL}
              alt={currentProject.title}
            />
          </div>
          <div className="p-6 flex-1 flex-col justify-center items-center ">
            <div>
              <h3 className="text-3xl  font-semibold text-white hover:text-shadow-multicolor">
                <a
                  href={currentProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-center items-center"
                >
                  {currentProject.title} <GoArrowUpRight />
                </a>
              </h3>
              <p className="text-gray-300 mt-3">
                {" "}
                {isMobile ? shortDescription : currentProject.description}
              </p>

              <div className="mt-4 flex flex-col justify-center items-center">
                <h4 className="text-lg text-center font-medium text-blue-400 mb-2">
                  Technologies Used:
                </h4>
                <ul className="flex items-center justify-center flex-wrap gap-2 m-auto">
                  {currentProject.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex w-full justify-between items-center mt-7">
              <button
                className="arrow-btn bg-gray-800 text-white p-2 rounded-full"
                onClick={() => handleNavigation("previous")}
              >
                <img
                  src="/assets/left-arrow.png"
                  alt="left arrow"
                  className="w-5 h-5"
                />
              </button>

              <button
                className="arrow-btn bg-gray-800 text-white p-2 rounded-full"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
      </div>
    </div>
  );
}

export default ProjectCard;
