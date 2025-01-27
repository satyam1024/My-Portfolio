import React from "react";

function SkillCard({ category, skills }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-blue-500 mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <div className="flex rounded-lg flex-wrap bg-green-800 justify-center p-4 space-x-4">
        {skills.map((skill, index) => {
          return (
            <div
              className="flex my-4 flex-row items-center bg-black text-white p-4 rounded-lg shadow-md space-y-2 w-30 sm:w-30 md:w-56 lg:w-45 xl:w-50"
              key={`${index}`}
            >
              <div className="flex mr-2 justify-center">
                <img
                  src={skill.url}
                  alt={skill.name}
                  className="h-10 w-10 object-cover rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center text-lg font-semibold">
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
