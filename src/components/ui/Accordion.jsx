import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, stagger, spring } from "motion/react";

const Accordion = ({ data = [], isInView = true }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4 max-w-2xl w-full mx-auto">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{
            delay: stagger(0.3, { start: 0.2 })(i),
            type: spring,
            stiffness: 150,
            damping: 20,
          }}
          className="border border-edge rounded-lg bg-surface shadow hover:shadow-lg w-full md:w-2xl"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex-center-between px-4 py-3 gap-8 text-dark font-semibold cursor-pointer"
          >
            <span className="flex-1 text-left break-words">{item?.title}</span>

            <ChevronDown
              className={`w-5 h-5 shrink-0 transition-transform ${
                openIndex === i ? "rotate-180 text-brand" : ""
              }`}
            />
          </button>

          {openIndex === i && (
            <div className="px-4 pb-4 text-muted w-full break-words">
              {item?.desc}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
