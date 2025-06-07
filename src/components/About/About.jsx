import { useState } from "react";
import Skill from "./Skill";
import Experience from "./Experience";

const PROFILE_IMAGE = {
  src: "me.webp",
  alt: "Photo of Mu Zhang",
};

const ABOUT_TEXT = {
  highlight: "I'm a data enthusiast interested in delivering intuitive visualisations for technical concepts.",
  description: "People call me MingMing, and a lot of my interests relate to nerdy media. When I'm not designing or coding, you can also find me editing videos and translating!"
};

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  //   setImageError(false);
  // };

  const renderPfp = () => (
    <div className="flex flex-col w-full bg-dark2 rounded-lg overflow-hidden border border-dark3">
      <div className="relative">
        {/* {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-dark2 animate-pulse flex items-center justify-center">
            <span className="text-gray">Loading image...</span>
          </div>
        )} */}
        
        <img 
          src={PROFILE_IMAGE.src}
          alt={PROFILE_IMAGE.alt}
          className={`w-full h-auto object-cover max-w-full transition-opacity duration-300`}
          //    ${
          //   imageLoaded ? 'opacity-100' : 'opacity-0'
          // }`}
          // onLoad={handleImageLoad}
          loading="eager" 
        />
        
      </div>
    </div>
  );

  const renderAboutTxt = () => (
    <div className="text-sm md:text-base text-left bg-dark2 p-6 md:p-8 rounded-lg flex flex-col gap-4 w-full">
      <p className="font-bold"> 
        I'm a data enthusiast interested in delivering 
        <span className="text-primary"> intuitive visualisations for technical concepts. </span> 
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
