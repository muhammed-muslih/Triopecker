import { motion, useInView } from "motion/react";
import { useRef } from "react";

const AboutHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div className="w-full text-center" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 75 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
            : { opacity: 0, y: 75 }
        }
        exit={{ opacity: 0, y: 75 }}
        className="text-2xl sm:text-3xl lg:text-4xl  font-bold mb-6 text-dark capitalize"
      >
        About <span className="text-brand">Triopecker</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            : { opacity: 0, y: 50 }
        }
        exit={{ opacity: 0, y: 50 }}
        className="text-base md:text-lg text-muted max-w-4xl mx-auto leading-relaxed"
      >
        At Triopecker, we believe in the power of technology, creativity, and
        strategy working together. We are dedicated to building scalable,
        reliable, and impactful products that help businesses thrive in the
        modern world.
      </motion.p>
    </div>
  );
};

export default AboutHero;
