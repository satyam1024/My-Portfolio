import React from "react";
import ProjectCard from "./ProjectCard";
import { MyProject } from "../api/demo";

function Project() {
  return (
    <section id="projects" className="py-16 px-8  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">My Projects</h2>

        {Object.entries(MyProject).map(([category, project]) => (
          <ProjectCard key={category} category={category} projects={project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
