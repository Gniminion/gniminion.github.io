import Skill from "./Skill";
import Experience from "./Experience";
import { PROFILE_IMAGE, ABOUT_TEXT } from "../../data/about";
import { useState } from 'react';

function About() {

  const renderPfp = () => {
    const [loaded, setLoaded] = useState(false);
    return (
      <div className="flex flex-col w-full bg-dark2 rounded-lg overflow-hidden border border-dark3">
        <div className="relative">
          {/* Blurred placeholder */}
          {!loaded && (
            <img
              src="/me-blur.png"
              alt={PROFILE_IMAGE.alt}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                filter: 'blur(20px)',
                transition: 'opacity 0.3s',
                opacity: loaded ? 0 : 1,
                objectFit: 'cover',
              }}
            />
          )}
          {/* Full image */}
          <img
            src={PROFILE_IMAGE.src}
            alt={PROFILE_IMAGE.alt}
            className={`w-full h-auto object-cover max-w-full`}
            style={{
              transition: 'opacity 0.3s',
              opacity: loaded ? 1 : 0,
            }}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    );
  };

  const renderAboutTxt = () => (
    <div className="text-sm md:text-base text-left bg-dark2 p-6 md:p-8 rounded-lg flex flex-col gap-4 w-full">
      <p className="font-medium"> 
        I'm a data enthusiast interested in delivering 
        <span className="text-primary font-medium"> intuitive visualisations for technical concepts. </span> 
      </p>
      <div>
        <p className="text-gray">{ABOUT_TEXT.description}</p>
      </div>
    </div>
  );

  const renderLeftColumn = () => (
    <div className="flex flex-col gap-4 w-full">
      {renderPfp()}
      {renderAboutTxt()}
    </div>
  );

  const renderRightColumn = () => (
    <div className="flex flex-col w-full h-full min-h-0 bg-dark2 rounded-lg overflow-hidden">
      <Experience />
    </div>
  );

  return (
    <div className="flex-1 overflow-auto">
      <div className="mt-4 text-white">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
          {renderLeftColumn()}
          {renderRightColumn()}
        </div>

        {/* Skills section */}
        <div className="bg-dark2 rounded-lg mt-8 overflow-hidden">
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default About;
