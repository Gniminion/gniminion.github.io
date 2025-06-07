export const CATEGORIES = ["All", "Data", "Design", "Development"];

export const PROJECTS = [
  { 
    title: "Tech Investments Analysis", 
    category: ["Data", "Development"], 
    image: "cxc.png", 
    desc: "Building a predictive model and dashboard to advise investors in Canada's tech industry",
    priority: true,
    link: "https://github.com/Gniminion/tech-investment-analysis",
    tags: ["Python", "Pandas", "Scikit-learn", "Dash", "Git", "Machine Learning", "Data Visualization"],
    fullDescription: {
      overview: {
        content: `This hackathon project for CxC 2025 aims to help investors make data-driven decisions in Canada's rapidly evolving tech sector. By analyzing historical investment data and market trends provided by RunQL, our team developed a predictive model and interactive dashboard for investment insights.`,
        images: [
          {
            src: "tidash.png",
            caption: "Our interactive dashboard showing trends from funding stages, investor demographics, regions, and more"
          }
        ]
      },
    }
  },
  { 
    title: "Learn More Video Series", 
    category: "Design", 
    image: "learnmore.png",
    desc: "Storyboarding, designing, and editing fun animated videos for students to learn effectively",
    priority: true,
    link: "https://www.youtube.com/@LearnMoreWithDanWolczuk/videos",
    tags: ["Photoshop", "Davinci Resolve", "Storyboarding", "Animation"],
    fullDescription: {
      overview: "Learn More is an educational video series designed to make complex topics accessible and engaging for students. Through animation and storytelling, we transform challenging concepts into memorable learning experiences.",
      problem: "Traditional educational content often fails to engage students, leading to reduced learning outcomes. There was a need for content that could both educate and entertain while maintaining high educational standards.",
      exploration: "We researched educational psychology principles and conducted surveys with students and teachers to understand their needs. This led to developing a unique style that balances entertainment with educational value.",
      development: "Each video goes through a comprehensive production pipeline: concept development, storyboarding, animation design in Photoshop, and final editing in Davinci Resolve. We focus on creating visually appealing content that maintains educational integrity.",
      challenges: "Balancing entertainment with educational value was a constant challenge. We also needed to develop efficient workflows to maintain consistent quality while meeting regular release schedules.",
      outcome: "The channel has grown to over 10,000 subscribers, with teachers regularly incorporating our videos into their curriculum. Student feedback indicates improved understanding and retention of complex topics."
    }
  }, 
  { 
    title: "Subletting in California ↗", 
    category: "Data", 
    image: "sublet.png",
    desc: "Advising real estate stakeholders on the housing trends in California through exploratory analysis",
    priority: false,
    link: "https://github.com/Gniminion/rchive/blob/main/Datafest%202025/DataFest%202025.pdf",
    tags: ["R", "Data Visualization", "Market Research"]
  },
  { 
    title: "AI Product Website ↗", 
    category: ["Design", "Development"], 
    image: "mikoai.png",
    desc: "Designing and developing an info site for an AI platform, increasing traction for product and recruitment",
    priority: false,
    link: "https://mikomiko.ai",
    tags: ["React", "Tailwind CSS", "Figma", "Next.js", "Git", "SEO"]
  },
  { 
    title: "Conference Tracker ↗", 
    category: ["Data", "Development"], 
    image: "contrack.png",
    desc: "A tool for front desk workers to efficiently manage attendee information and check in process",
    priority: false,
    link: "https://github.com/Gniminion/conference-tracker",
    tags: ["Java", "Swing", "OOP", "Prototyping"]
  },
  { 
    title: "This Portfolio Site ↗", 
    category: ["Design", "Development"], 
    image: "prototype.png",
    desc: "A simple, intuitive portfolio template to showcase personal works",
    priority: false,
    link: "https://github.com/Gniminion/portfolio",
    tags: ["React", "Tailwind CSS", "Figma", "Vite", "Git"]
  },
];