import React from "react";
import ProjectCard from "./ProjectCard";
import MyProject from "../api/demo";

function Project() {
  return (
    <section id="projects" className="py-16 px-8 bg-black-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MyProject.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
