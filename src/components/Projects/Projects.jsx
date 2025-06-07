import { useState } from "react";
import ProjCard from "./ProjCard";
import Papers from "./Papers";
import { motion } from "framer-motion";
import { PROJECTS } from "../../data/projects";
import { CATEGORIES } from "../../data/projects";

export const getProjectBySlug = (slug) => {
  return PROJECTS.find(project => {
    const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return projectSlug === slug;
  });
};

const CARD_ANIMATION = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" }
  }
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredProjects = () => {
    if (activeCategory === "All") {
      return PROJECTS;
    }
    
    return PROJECTS.filter(project => 
      Array.isArray(project.category) 
        ? project.category.includes(activeCategory)
        : project.category === activeCategory
    );
  };

  const separateProjectsByPriority = (projects) => {
    const priorityProjects = projects.filter(project => project.priority);
    const standardProjects = projects.filter(project => !project.priority);
    
    return { priorityProjects, standardProjects };
  };

  const renderCategoryButtons = () => (
    <div className="flex space-x-4 mb-6 overflow-x-auto pb-2 hide-scrollbar">
      {CATEGORIES.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 bg-dark2 ${
            activeCategory === category 
              ? "border border-primary text-white" 
              : "border border-dark3 text-gray hover:cursor-pointer"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );

  const renderProjectCard = (project) => (
    <motion.a
      layout
      href={project.link} 
      target="_blank"
      rel="noopener noreferrer"
      key={`${project.title}-${activeCategory}`} 
      initial="hidden"
      animate="visible"
      variants={CARD_ANIMATION}
      className="block transition-all duration-300 ease-in-out hover:scale-[1.02]"
    >
      <ProjCard 
        title={project.title} 
        image={project.image} 
        desc={project.desc}
        tags={project.tags}
        priority={project.priority}
      />
    </motion.a>
  );

  const renderPriorityProjects = (projects) => {
    if (projects.length === 0) return null;

    return (
      <div className="grid grid-cols-1 gap-6 w-full mb-6">
        {projects.map((project, index) => renderProjectCard(project, index))}
      </div>
    );
  };

  const renderStandardProjects = (projects) => {
    if (projects.length === 0) return null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {projects.map((project, index) => renderProjectCard(project, index))}
      </div>
    );
  };

  const filteredProjects = getFilteredProjects();
  const { priorityProjects, standardProjects } = separateProjectsByPriority(filteredProjects);

  return (
    <section className="text-white text-sm flex flex-col w-full">
      {renderCategoryButtons()}
      
      {renderPriorityProjects(priorityProjects)}
      
      {renderStandardProjects(standardProjects)}
      
      <Papers/>
    </section>
  );
}

export default Projects;
