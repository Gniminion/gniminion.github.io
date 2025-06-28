import { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectNav from './ProjectNav';
import ProjectHeader from './ProjectHeader';
import ProjectSection from './ProjectSection';
import { PROJECTS } from '../../../data/projects';

const SECTION_NAMES = {
  overview: "Overview",
  problem: "Problem",
  development: "Development",
  outcome: "Outcome"
};

const SUMMARY_FIELDS = [
  { label: 'Role', key: 'role' },
  { label: 'Team', key: 'team' },
  { label: 'Deliverables', key: 'deliverables' },
  { label: 'Duration', key: 'duration' },
];

const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);

  // Create refs for each section
  const sectionRefs = {
    overview: useRef(null),
    problem: useRef(null),
    development: useRef(null),
    outcome: useRef(null)
  };

  // Get project data
  const project = PROJECTS.find(p => createSlug(p.title) === id);

  // Handle mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Redirect if project not found
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  // Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden text-white">
      {/* Desktop Navigation */}
      <nav className="hidden md:block w-60 h-screen bg-dark2 p-12 overflow-y-auto">
        <ProjectNav
          project={project}
          sections={SECTION_NAMES}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          onBackClick={() => navigate('/')}
        />
      </nav>

      <div className="flex-1 flex flex-col min-h-0">
        {/* Mobile Header */}
        <ProjectHeader
          project={project}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onBackClick={() => navigate('/')}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 bg-dark2 z-40 p-12 pt-20 overflow-y-auto"
            >
              <ProjectNav
                project={project}
                sections={SECTION_NAMES}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
                onBackClick={() => navigate('/')}
                isMobile={true}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6 lg:p-12">

            {/* Main Project Image */}
            {project?.image && (
              <div className="aspect-video mb-12">
                <img 
                  src={`/portfolio/projects/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            )}

            {/* Summary Section */}
            <section className="mb-16" id="summary">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 text-sm leading-relaxed">
                {SUMMARY_FIELDS.map(({ label, key }) => {
                  const content = project?.fullDescription?.[key];

                  return (
                    <div key={key}>
                      <h3 className="font-medium text-white mb-1">{label}</h3>

                      {Array.isArray(content) ? (
                        <ul className="list-disc list-inside space-y-1">
                          {content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="whitespace-pre-line">{content}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Sectioned Content */}
            {Object.entries(SECTION_NAMES).map(([id, title]) => (
              <ProjectSection
                key={id}
                id={id}
                title={title}
                content={project?.fullDescription?.[id]?.content}
                images={project?.fullDescription?.[id]?.images}
                forwardedRef={sectionRefs[id]}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

export default ProjectPage; 
