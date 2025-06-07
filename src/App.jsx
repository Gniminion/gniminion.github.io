import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Project from './components/projects/Projects';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProjectPage from "./components/projects/projpage/ProjectPage";
import './App.css'

const BASE_URL = import.meta.env.BASE_URL;

export default function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
  };

  const MainContent = () => (
    <div className="flex h-screen text-white overflow-hidden ">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      
      <div className="flex-1 overflow-y-auto p-8 lg:p-12 w-full max-w-6xl mx-auto">
        <section ref={homeRef} className="-mt-4">
          <h2 className="text-left text-3xl font-bold">About</h2>
          <About/>
        </section>

        <section ref={projectsRef} className="mt-8">
          <h2 className="text-left text-3xl font-bold mb-8">Projects</h2>
          <Project/>
        </section>

        <section ref={contactRef} className="mt-8 mb-4">
          <h2 className="text-left text-3xl font-bold">Contact</h2>
          <Contact/>
        </section>
      </div>
    </div>
  );

  return (
    <Router basename={BASE_URL}>
      <div className="min-h-screen grid-background">
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
