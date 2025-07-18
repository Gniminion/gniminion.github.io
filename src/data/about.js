import { faPython, faReact, faRProject, faGitAlt, faFigma, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPenNib } from "@fortawesome/free-solid-svg-icons";

export const PROFILE_IMAGE = {
    src: "me.png",
    alt: "Photo of Mu Zhang",
  };
  
  export const ABOUT_TEXT = {
    highlight: "I'm a data enthusiast interested in delivering intuitive visualisations for technical concepts.",
    description: "People call me MingMing, and a lot of my interests relate to nerdy media. When I'm not designing or coding, you can also find me editing videos and translating!"
  }; 
  
export const EXPERIENCES = [
    {
      logo: "mikomiko.png",
      institution: "Mikomiko SG · 2025",
      role: "UX/UI Designer and Product Management",
      description: "Providing intuitive user interfaces for a AI tool platform. Involved in frontend development of product websites.",
    },
    {
      logo: "waterloo.png",
      institution: "UW Mathematics Faculty · 2024",
      role: "Animator for Educational Works",
      description: "Designed, storyboarded, and edited videos for a learning how to learn series.",
    },
  ];

export const EDUCATION = [
    {
      logo: "waterloo.png",
      institution: "University of Waterloo · 2023 - 2028",
      degree: "Bachelor of Mathematics (Computational Mathematics & Biostatistics)",
      description: "Relevant coursework in statistical analysis, data structures, object oriented programming, bioinformatics, and more.",
    },
    {
      logo: "coursera.png",
      institution: "Coursera · 2024",
      degree: "Google Data Analytics Certificate",
      description: "Completed modules in database foundations and computational tools with Excel, SQL, R, and Tableau.",
    },
    {
      logo: "ib.png",
      institution: "Nexus International School · 2020 - 2023",
      degree: "International Baccalaureate Bilingual Diploma",
      description: "High scoring in Higher Level Mathematics, Biology, and Computer Science.",
    },
  ];

export const SKILLS = [
    { logo: faGitAlt, name: "Git", description: "Version control" },
    { logo: faRProject, name: "R", description: "Data analysis" },
    { logo: faDatabase, name: "SQL", description: "Data analysis" },
    { logo: faPython, name: "Pandas · Python", description: "Data analysis" },
    { logo: faReact, name: "React · JS", description: "Frontend dev" },
    { logo: faCss3Alt, name: "Tailwind · CSS", description: "Frontend dev" },
    { logo: faFigma, name: "Figma", description: "UI design" },
    { logo: faPenNib, name: "Adobe Suite", description: "Graphic design" },
  ];