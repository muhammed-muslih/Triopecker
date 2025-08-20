import { faqs } from "../../constants/menu";
import Accordion from "../ui/Accordion";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const FAQAccordion = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div className="px-6 mx-auto" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            : { opacity: 0, y: 50 }
        }
        exit={{ opacity: 0, y: 50 }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-dark capitalize text-center"
      >
        FAQs
      </motion.h2>
      <div className="w-full">
        <Accordion data={faqs} isInView={isInView} />
      </div>
    </div>
  );
};

export default FAQAccordion;
