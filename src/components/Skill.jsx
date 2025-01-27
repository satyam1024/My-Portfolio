import React, { useState, useRef, useEffect } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../api/demo";

function Skills() {
  const [open, setOpen] = useState(true);
  const divRefs = useRef([]);

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
      { threshold: 0.01 }
    );

    divRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-16 px-8 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h2 className="text-4xl font-bold mb-12">
            <span className="gradient-text">My Skills & Technologies</span> 🛠️
          </h2>
        </button>

        {open &&
          Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              ref={(el) => (divRefs.current[index] = el)}
              className={`transform ${
                index % 2 === 0 ? "leftani" : "rightani"
              } transition-all duration-700`}
            >
              <SkillCard
                key={category}
                category={category}
                skills={skillList}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
