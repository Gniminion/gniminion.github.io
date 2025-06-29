import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjCard({ title, image, desc, tags, priority }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (priority) {
      e.preventDefault();
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      navigate(`/project/${slug}`);
    }
  };

  const renderTags = () => (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-sm rounded-md bg-dark text-gray"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <div 
      className="flex flex-col h-full bg-dark2 border-dark3 rounded-xl p-4"
      onClick={handleClick}
    >
      <div 
        className="relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="pt-[55%] relative">
          <img 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ${
              hovered && priority ? 'opacity-30' : ''
            }`}
            src={`/portfolio/projects/${image}`} 
            alt={title}
          />
          {priority && (
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h4 className="text-white text-lg font-medium">Read Case Study →</h4>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-left flex-1">
        
        <h2 className="text-lg md:text-xl text-white font-medium">{title}
          {!priority && (
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-base" />
          )}
        </h2>
        
        {tags && renderTags()}
        <p className="text-sm md:text-base text-gray mt-2">{desc}</p>
      </div>
    </div>
  );
}

export default ProjCard;
