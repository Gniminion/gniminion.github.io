import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes, faBars, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectHeader({ project, isMobileMenuOpen, setIsMobileMenuOpen, onBackClick }) {
  return (
    <div className="md:hidden sticky top-0 bg-dark2 z-50 px-6 py-4 flex items-center justify-between">
      <button 
        onClick={onBackClick}
        className="flex items-center text-gray hover:text-white transition-colors cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </button>
      <div className="flex items-center gap-4">
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors cursor-pointer"
          >
            View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        )}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray hover:text-white transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );
}

export default ProjectHeader; 