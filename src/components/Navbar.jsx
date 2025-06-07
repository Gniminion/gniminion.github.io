import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLayerGroup, faPaperPlane, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MOBILE_BREAKPOINT = 600;
const OBSERVER_THRESHOLD = 0;

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/mu-mingming-zhang/",
  github: "https://github.com/Gniminion"
};

const NAVIGATION_ITEMS = [
  { id: "home", icon: faHome, label: "Home" },
  { id: "projects", icon: faLayerGroup, label: "Projects" },
  { id: "contact", icon: faPaperPlane, label: "Contact" }
];

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRefs = {
    home: homeRef,
    projects: projectsRef,
    contact: contactRef
  };

  // Handle mobile detection and navbar state
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
      setIsMobile(isMobileView);
      
      if (isMobileView) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle section intersection observation
  useEffect(() => {
    const sections = Object.entries(sectionRefs).map(([id, ref]) => ({ ref, id }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: OBSERVER_THRESHOLD }
    );

    sections.forEach(({ ref, id }) => {
      if (ref?.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [homeRef, projectsRef, contactRef]);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleNavItemClick = (sectionRef) => {
    scrollToSection(sectionRef);
    
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleMobileOverlayClick = () => setIsOpen(false);

  const getNavItemClassName = (sectionId) => {
    const baseClasses = "flex items-center gap-3 cursor-pointer transition-all";
    const activeClasses = activeSection === sectionId ? "text-white font-bold" : "text-gray";
    
    return `${baseClasses} ${activeClasses}`;
  };

  const renderProfileSection = () => {
    if (!isOpen) return null;

    return (
      <div className="text-left">
        <h1 className="text-left text-2xl font-bold mt-2">
          Hello! I'm <br />
          <span className="text-primary">Mu Zhang</span>
        </h1>
        <h1 className="text-left mt-4 text-white">
          Data Analyst <br />
          UX / UI Designer <br />
          Web Developer
        </h1>
        <a href={SOCIAL_LINKS.linkedin}>
          <button className="px-2 py-1 border-2 border-gray text-sm text-gray rounded cursor-pointer mt-4 mb-8">
            Resume
          </button>
        </a>
      </div>
    );
  };

  const renderSocialLinks = () => (
    <div className={`flex items-center ${isOpen ? "space-x-4" : "flex-col space-y-4"} transition-all duration-300`}>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
        <button className="text-white hover:text-primary transition cursor-pointer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </button>
      </a>
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
        <button className="text-white hover:text-primary transition cursor-pointer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </button>
      </a>
    </div>
  );

  const renderNavigationItems = () => (
    <ul className="flex flex-col space-y-4 mt-12 flex-1/3">
      {NAVIGATION_ITEMS.map(({ id, icon, label }) => (
        <li
          key={id}
          onClick={() => handleNavItemClick(sectionRefs[id])}
          className={getNavItemClassName(id)}
        >
          <FontAwesomeIcon icon={icon} className="text-xl" />
          {isOpen && <span className="text-base">{label}</span>}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-dark z-20 lg:hidden"
          onClick={handleMobileOverlayClick}
        />
      )}

      {/* Navigation sidebar */}
      <nav
        className={`
          bg-dark2 text-white h-screen sticky top-0 flex flex-col transition-all duration-300 z-20
          ${isOpen ? "w-60 p-12" : "w-14 p-4"}
        `}
      >
        {/* Toggle button */}
        <div className="flex justify-end px-1/2">
          <button 
            className="cursor-pointer"
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-white text-2xl"
            />
          </button>
        </div>

        {/* Profile section */}
        <div className="transition-all duration-300 flex flex-1/6">
          {renderProfileSection()}
        </div>

        {/* Social links */}
        {renderSocialLinks()}
      
        {/* Navigation items */}
        {renderNavigationItems()}
      </nav>
    </>
  );
}

export default Navbar;
