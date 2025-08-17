import { ourValues } from "../../constants/menu";
import { motion, useInView, stagger, spring } from "motion/react";
import { useRef } from "react";

const WhyChooseUs = () => {
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
          className="text-3xl md:text-4xl font-bold text-text mb-4 capitalize"
        >
          Why Choose Us
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              delay: stagger(0.3, { start: 0.2 })(index),
              type: spring,
              stiffness: 150,
              damping: 20,
            }}
            key={val.title}
            className="flex flex-col items-center text-center p-8 bg-surface rounded-2xl shadow-lg 
            transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group/card"
          >
            <span
              className="p-4 rounded-xl bg-accent/20 text-accent mb-6 group-hover/card:bg-brand
             group-hover/card:text-surface transition-colors"
            >
              <val.icon size={32} />
            </span>
            <h3 className="text-xl font-semibold text-dark mb-3">
              {val.title}
            </h3>
            <p className="text-muted text-sm">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default WhyChooseUs;
