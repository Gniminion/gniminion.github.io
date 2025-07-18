import { useState } from "react";
import { EXPERIENCES, EDUCATION } from "../../data/about";

function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <div className="mx-auto p-4 lg:p-6 bg-dark2 text-white rounded-lg">
      <div className="flex rounded-lg">
        <button
          className={`hover:cursor-pointer border border-dark3 flex-1 px-2 py-2 rounded-l-lg transition-all ease-in-out duration-500 ${
            activeTab === "Experience"
              ? "bg-dark3 text-white font-medium"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Experience")}
        >
          <h3 className="text-sm md:text-base">Experience</h3>
        </button>

        <button
          className={`hover:cursor-pointer border border-dark3 flex-1 px-2 py-2 rounded-r-lg transition-all ease-in-out duration-500 ${
            activeTab === "Education"
              ? "bg-dark3 text-white font-medium"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          <h3 className="text-sm md:text-base">Education</h3>
        </button>
      </div>

      <div key={activeTab}
           className="mt-4 border border-dark3 bg-dark rounded-lg p-4 overflow-y-auto transition-all fade-in opacity-200 duration-500 max-h-[400px] ">
        {activeTab === "Experience"
          ? EXPERIENCES.map((exp, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={exp.logo} 
                    alt={exp.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0"> 
                    <h3 className="text-sm md:text-base font-medium break-words">{exp.role}</h3>
                    <p className="text-xs md:text-sm text-gray">{exp.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-15 break-words">
                  {exp.description}
                </p>
              </div>
            ))
          : EDUCATION.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-medium break-words">{edu.degree}</h3>
                    <p className="text-xs md:text-sm text-gray">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-16 break-words">
                  {edu.description}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Experience;
