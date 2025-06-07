import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Papers() {
    const [expandedPaper, setExpandedPaper] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedPaper(index === expandedPaper ? null : index);
    };
    
    const papers = [
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
    return (
        <div className="mt-8 space-y-4 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">Papers</h2>

            {papers.map((paper, index) => {
            const isOpen = expandedPaper === index;
            return (
                <div
                key={index}
                className="border border-dark3 rounded-lg overflow-hidden transition-all duration-300"
                >
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 bg-dark2 flex justify-between items-center text-white text-left transition text-sm md:text-base cursor-pointer"
                >
                    <span>{paper.title}</span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </button>

                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden px-4 bg-dark2"
                >
                    <div className="text-gray text-sm md:text-base mb-4">
                    <p className="mb-4">{paper.desc}</p>
                    <a className="text-primary hover:underline font-semibold"
                        href={paper.link} target="_blank"
                    >
                        View Paper ↗
                    </a>
                    </div>
                </motion.div>
                </div>
            );
            })}
        </div>
    )
}
export default Papers;
