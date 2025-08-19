import { motion, stagger, spring, useInView } from "motion/react";
import { useRef } from "react";

const process = [
  "Discovery & Planning",
  "UI/UX Design",
  "Development & Iteration",
  "Testing & QA",
  "Launch & Support",
];

const OurProcess = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);
  return (
    <div className="px-6 max-w-6xl mx-auto" ref={sectionRef}>
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
        Our Process
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {process.map((step, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              delay: stagger(0.3, { start: 0.2 })(i),
              type: spring,
              stiffness: 150,
              damping: 20,
            }}
            key={i}
            className="flex flex-col items-center text-center bg-surface p-6 h-full cursor-pointer 
            rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full 
               bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-brand)] to-[var(--color-accent)]
              text-surface font-bold text-lg shadow-md mb-6"
            >
              {i + 1}
            </div>
            <p className="text-dark font-medium leading-relaxed">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
