import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { technologySolutions } from "../../constants/menu";
import Card from "../ui/Card";

const TechnologySolutionsSection = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef);

  return (
    <div className="w-full" ref={sectionRef}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:text-3xl lg:text-4xl  text-dark font-bold mb-4 capitalize"
        >
          Technology Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-base md:text-lg text-muted max-w-3xl mx-auto"
        >
          We design, build, and scale digital solutions that power businesses
          across industries.
        </motion.p>
      </div>
      <div className="px-6 max-w-6xl mx-auto">
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
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologySolutions?.items.map((service, index) => (
            <Card
              key={service.name}
              index={index}
              isInView={isInView}
              Icon={service.icon}
              title={service.name}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySolutionsSection;
