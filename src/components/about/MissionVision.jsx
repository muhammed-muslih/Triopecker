import { motion, useInView } from "motion/react";
import { useRef } from "react";

const MissionVision = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={sectionRef}>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:text-3xl lg:text-4xl  font-bold mb-4 text-dark capitalize"
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-sm sm:text-base lg:text-lg text-muted font-medium leading-relaxed"
        >
          To deliver innovative, scalable, and human-centered digital solutions
          that empower startups, SMEs, and enterprises to thrive in the
          ever-changing digital landscape.
        </motion.p>
      </div>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:lg-3xl lg:text-4xl font-bold mb-4 text-dark capitalize"
        >
          Our Vision
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-sm sm:text-base lg:text-lg text-muted font-medium leading-relaxed"
        >
          To become a trusted global partner for businesses seeking growth and
          transformation, redefining how technology and marketing work together.
        </motion.p>
      </div>
    </div>
  );
};

export default MissionVision;
