import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { PAPERS } from "../../data/projects";

function Papers() {
    const [expandedPaper, setExpandedPaper] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedPaper(index === expandedPaper ? null : index);
    };

    return (
        <div className="mt-8 space-y-4 text-left">
            <h2 className="text-2xl mb-4 text-white">Papers</h2>

            {PAPERS.map((paper, index) => {
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
                    <span className="font-medium">{paper.title}</span>
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
                    <a className="text-primary hover:underline"
                        href={paper.link} target="_blank"
                    >
                        View Paper <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
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
