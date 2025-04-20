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
          desc: "A month long project involving collecting both quantitative and qualitative data using laboratory techniques. The results of this paper supports the hypothesis that higher osmolarity limits mitosis and the cell division process in Allium cepa root meristem cells. More specifically, a hypertonic condition produces playsmolysation of cells and a decrease in mitotic rate, evidenced by the decline of the mitotic index. ",
          link: "https://drive.google.com/file/d/15A94JMMRH8zltPuQeRgWzNTQX3K2LSte/view?usp=drive_link" },
        { title: "Partial Replication of Glanzer and Cunitz (1966) and Investigation of the Recency Eﬀect",  category: "Psychology",
          desc: "The paper takes an experimental approach, aiming to study short-term recall of numbers in relation to the associated theory, attempting to gain an understanding of the Multi Store Memory Model, on recency retrieval within the STM store. This is particularly useful for students in understanding distractions in studying techniques - for example, why memorising flashcards needs to be immediately proceeded by active rehearsal for the information to retain.",
          link: "https://drive.google.com/file/d/1C4dQbw7Mxc0_oSJxRZwmjT-OLmRiZPdT/view?usp=drive_link" },
        { title: "The Conundrum of the Frame Problem",  category: "Cognitive Science",
          desc: "The frame problem states that background information of the environment that we take for granted and our understanding of non-effects is not intuitively recognised by computers. Through this exploration, with an example case of generative models, an argument has been made that for AI to overcome limitations posed by the frame problem, it needs to embrace a strategy inspired by human assumptions about relevance, rather than requiring the explicit predefinitions.",
          link: "https://drive.google.com/file/d/1L5gJ8TF8Q29-4nZy1vmu0CQ5ofC5nBMI/view?usp=drive_link" },
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
                className="border-2 border-dark3 rounded-lg overflow-hidden transition-all duration-300"
                >
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 flex justify-between items-center text-white text-left transition text-sm md:text-base cursor-pointer"
                >
                    <span>{paper.title}</span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </button>

                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4"
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
