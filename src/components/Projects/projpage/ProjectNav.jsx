import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectNav({ 
  project, 
  sections, 
  activeSection, 
  onSectionClick, 
  onBackClick, 
  isMobile = false 
}) {
  if (!project) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Back Button */}
      {!isMobile && (
        <div className="flex px-1/2 mb-6">
          <button 
            onClick={onBackClick}
            className="flex items-center text-gray hover:text-white transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            More Projects
          </button>
        </div>
      )}

      {/* Project Info */}
      <div className="flex-1/6">
        <h2 className="text-2xl  mb-4">{project.title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map(tag => (
            <span key={tag} className="px-2 py-1 text-sm rounded-md bg-dark text-gray">
              {tag}
            </span>
          ))}
        </div>
        
        {!isMobile && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors cursor-pointer inline-block"
          >
            View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1/3 mt-12">
        <ul className="space-y-4 border-l border-dark3">
          {Object.entries(sections).map(([id, label]) => (
            <li 
              key={id}
              onClick={() => onSectionClick(id)}
              className={`
                flex cursor-pointer transition-colors pl-4 -ml-px border-l-2
                ${activeSection === id 
                  ? 'text-white  border-primary' 
                  : 'text-gray hover:text-white border-transparent hover:border-primary'
                }
              `}
            >
              <h4>{label}</h4>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProjectNav; 
