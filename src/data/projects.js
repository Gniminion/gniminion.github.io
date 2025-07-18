export const CATEGORIES = ["All", "Data", "Design", "Development"];

export const PROJECTS = [
  { 
    title: "Tech Investments Analysis", 
    category: ["Data", "Development"], 
    image: "cxc.png", 
    desc: "Building a predictive model and dashboard to advise investors in Canada's tech industry.",
    priority: true,
    link: "https://github.com/Gniminion/tech-investment-analysis",
    tags: ["Python", "Pandas", "Git", "Dash", "Scikit-learn", "Machine Learning", "Data Visualisation"],
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
        content: `This data science hackathon project for [CxC 2025](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) aims to help investors make data-driven decisions in Canada's rapidly evolving tech sector. By analysing historical investment data and market trends provided by RunQL, our team developed a predictive model and dashboard for investment insights. 

I was responsible for data cleaning, preprocessing, regional visualisation, predictive modelling, and final deployment and presentation.

Our [comprehensive dashboard](https://tech-investment-analysis.onrender.com/) shows trends from funding stages, investor demographics, regions, and more. The interface allows users to explore trends interactively and read about related insights.
`,
        images: [
          {
            src: "tidash.png",
            caption: "In our dashboard, Investment Trends Overtime trends can be filtered by year, province, and funding stage."
          }
        ]
      },
    
      problem: {
        content: `
Canada’s tech ecosystem is growing rapidly, yet investment data is often fragmented, complex, or difficult to interpret.
Stakeholders lack accessible tools to:
* Understand historical funding trends by region and sector
* Identify which sectors are rising or slowing in investor interest
* Forecast future investment dynamics

### Our goal was to turn messy investment data into usable, comprehensive insights through an interactive, open platform.`
      },      
    
      development: {
        content: `
We tackled the challenge by transforming unstructured funding datasets into a refined pipeline for data cleaning, aggregation, and exploration.

### My contributions included:
* Data Cleaning & Preprocessing: Resolved inconsistencies across sectors, deal sizes, and regional entries and removed irrelevant columns, aggregating into comprehensive datasets.
* Regional Analysis: Compared funding dynamics in hubs like Toronto, Vancouver, Montreal, and emerging cities, developing an interactive dot map.
* Dashboard Skeleton: Built the interface framework in Dash for dynamic visualisation
* Machine Learning Models: Developed and evaluated (using k-fold cross-validation) Random Forest regressors/classifiers to forecast sectoral funding probabilities, determining the top 5 predicted sectors with the most investments in 2025.



`,
        
        images: [
          {
            src: "modeltest.png",
            caption: "ML model accuracy comparison to determine Random Forest approach"
          }
        ]
      },
    
      outcome: {
        content: `Our project was recognised at the [CxC 2025 RunQL Track](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) as a runner up project.

### Key results:    
1. Built a pipeline for cleaning and analysing investment datasets
2. Delivered a predictive tool and dashboard that can be extended for real-world investor use
3. Open-sourced the project for future contributors and further development

We learned how to distill complex data into a [comprehensive report](https://docs.google.com/document/d/1AiPb38hWNCZXd5Xq7SNgfiy1YsRb904nUEvD_FRxBnE/edit?tab=t.0) under tight hackathon timelines, combining technical rigor with user-centered design.`
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
    tags: ["R", "Data Visualisation", "Market Research"]
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