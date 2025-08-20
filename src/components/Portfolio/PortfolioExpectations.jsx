import { expectations } from "../../constants/menu";
import Card from "../ui/Card";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const PortfolioExpectations = () => {
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
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-12 text-dark capitalize text-center"
      >
        Concepts & Capabilities
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expectations?.map((expectation, index) => (
          <Card
            key={expectation.title}
            index={index}
            isInView={isInView}
            Icon={expectation.icon}
            title={expectation.title}
            desc={expectation.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioExpectations;
