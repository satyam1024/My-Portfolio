import React from "react";

function ProjectCard({ imageURL, title, description, projectLink, skills }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={"placeholder-image.jpg"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-3">{description}</p>
        <div className="mt-4">
          <h4 className="text-lg font-medium text-blue-400 mb-2">
            Technologies Used:
          </h4>
          <ul className="flex items-center justify-center flex-wrap gap-2 m-auto">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
