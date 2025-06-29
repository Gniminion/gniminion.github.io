export const CATEGORIES = ["All", "Data", "Design", "Development"];

export const PROJECTS = [
  { 
    title: "Tech Investments Analysis", 
    category: ["Data", "Development"], 
    image: "cxc.png", 
    desc: "Building a predictive model and dashboard to advise investors in Canada's tech industry.",
    priority: true,
    link: "https://github.com/Gniminion/tech-investment-analysis",
    tags: ["Python", "Pandas", "Git", "Dash", "Scikit-learn", "Machine Learning", "Data Visualization"],
    fullDescription: {
      role: ` Data Scientist
      Frontend Developer
      Machine Learning Analyst`,
    
      duration: `2 Weeks
      Mar - Apr 2025`,

      deliverables:`Data Visualisation Dashboard
      Insights Report and Slides
      Aggregated Dataset
      Source Code
      `,
    
      team: `4 Members
      For CxC 2025 Hackathon
      RunQL Challenge`,
    
      overview: {
        content: `This hackathon project for [CxC 2025](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) aims to help investors make data-driven decisions in Canada's rapidly evolving tech sector. By analyzing historical investment data and market trends provided by RunQL, our team developed a predictive model and interactive dashboard for investment insights.`,
        images: [
          {
            src: "tidash.png",
            caption: "Our interactive dashboard showing trends from funding stages, investor demographics, regions, and more"
          }
        ]
      },
    
      problem: {
        content: `Page Work in Progress`
      },      
    
      development: {
        content: `We tackled the challenge by transforming messy investment datasets into actionable insights.

The interface allows users to filter by category (e.g., FinTech, AI), location (e.g., Toronto, Vancouver), and funding round to explore trends interactively.`,
        
        images: [
          {
            src: "model-acc.png",
            caption: "ML model accuracy comparison"
          }
        ]
      },
    
      outcome: {
        content: `Our project was recognized at the [CxC 2025 RunQL Track](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) as a runner up project.

## Key results:    
1 Built a reusable pipeline for cleaning and analyzing investment datasets
2 Delivered a predictive tool and dashboard that can be extended for real-world investor use
3 Open-sourced the project for future contributors and further development

We learned how to distill complex data into a comprehensive report under tight hackathon timelines, combining technical rigor with user-centered design.`
      }
    }
    
  },
  { 
    title: "Learn More Video Series", 
    category: "Design", 
    image: "learnmore.png",
    desc: "Storyboarding, designing, and editing videos to help students approach learning effectively.",
    priority: false,
    link: "https://www.youtube.com/@LearnMoreWithDanWolczuk/videos",
    tags: ["Photoshop", "Premiere Pro", "Storyboarding", "Animation"],
  }, 
  { 
    title: "Subletting in California", 
    category: "Data", 
    image: "sublet.png",
    desc: "Advising real estate stakeholders on the housing trends in California through exploratory analysis.",
    priority: false,
    link: "https://github.com/Gniminion/rchive/blob/main/Datafest%202025/DataFest%202025.pdf",
    tags: ["R", "Data Visualization", "Market Research"]
  },
  { 
    title: "MikoMiko Product Website", 
    category: ["Design", "Development"], 
    image: "mikoai.png",
    desc: "Developing an info site for an AI platform, increasing traction for product and recruitment.",
    priority: false,
    link: "https://mikomiko.ai",
    tags: ["React", "Tailwind CSS", "Figma", "Next.js", "Git", "SEO"]
  },
  { 
    title: "Conference Tracker", 
    category: ["Data", "Development"], 
    image: "contrack.png",
    desc: "A tool for front desk workers to efficiently manage attendee information and check in process.",
    priority: false,
    link: "https://github.com/Gniminion/conference-tracker",
    tags: ["Java", "SwingGUI", "OOP", "Prototyping"]
  },
  { 
    title: "Personal Art Portfolio", 
    category: ["Design"], 
    image: "artport.png",
    desc: "A broad collection of my smaller works, including educational comics and performance photography.",
    priority: false,
    link: "https://drive.google.com/file/d/1_bqNCADLANv-hy4M5-cUlOTYx1igkg8y/view?usp=sharing",
    tags: ["Graphic Design", "Photoshop", "Photography"]
  },
  // { 
  //   title: "This Portfolio Site ↗", 
  //   category: ["Development"], 
  //   image: "prototype.png",
  //   desc: "A simple, intuitive portfolio template to showcase personal works",
  //   priority: false,
  //   link: "https://github.com/Gniminion/portfolio",
  //   tags: ["React", "Tailwind CSS", "Vite", "Git"]
  // },
];

export const PAPERS = [
  { title: "Machine Translation in Human Oriented Workplaces", category: "IT",
    desc: "Machine translation covers the task of preserving the meaning of the input text and producing fluent text in the output language. As machine translation tools become more prevalent in daily life, there are, of course, benefits and drawbacks. This paper attempts to provide a holistic perspective in translation machines and human interaction by interviewing industry professionals.",
    link: "https://drive.google.com/file/d/1LIBhIGGU2dM3YiRdivpGxKs3GqQOslPe/view?usp=drive_link" },
  { title: "Evaluating the Iconic Design Behind the Ramune Bottle", category: "Mathematics", 
    desc: "This mathematical investigation aims to understand the structure and related volume of the Codd neck bottle in the hopes of finding why alterations have been made that takes away from its original authenticity, using applications of integration (volumes of revolution), geometric visualisation, and polynomial interpolations with matricies.",
    link: "https://drive.google.com/file/d/13-ZeC8RwwzlLL3vGj4JQjwpHCcQwB93d/view?usp=drive_link" },
  { title: "Investigating Osmolarity in Relation to Mitosis Rate in Meristem Cells", category: "Biology",
    desc: "A month long project involving collecting both quantitative and qualitative data using laboratory techniques. The results of this paper supports the hypothesis that higher osmolarity limits mitosis and the cell division process in Allium cepa root meristem cells.",
    link: "https://drive.google.com/file/d/15A94JMMRH8zltPuQeRgWzNTQX3K2LSte/view?usp=drive_link" },
  { title: "Comparing Shiny Hunting Methods in Generation 5 Pokemon Games",  category: "Mathematics",
    desc: "A short statstical exploration applying the Poisson distribution on encounter and hatching rates to find a optimal method in aquiring a shiny Axew.",
    link: "https://drive.google.com/file/d/1laTHjA4geHkGhKSTaHqzkBBX6ZgArRoG/view?usp=drive_link" },  
];