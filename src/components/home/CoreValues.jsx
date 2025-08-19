import { ourValues } from "../../constants/menu";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Card from "../ui/Card";

const CoreValues = () => {
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
          className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-dark mb-4 capitalize"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto"
        >
          We combine innovation, flexibility, and proven expertise to deliver
          solutions that truly make an impact.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ourValues.map((val, index) => (
          <Card
            key={val.title}
            index={index}
            isInView={isInView}
            Icon={val.icon}
            title={val.title}
            desc={val.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default CoreValues;
