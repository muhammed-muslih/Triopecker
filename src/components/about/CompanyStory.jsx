import AboutImage from "../../assets/about/about-img.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CompanyStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1.05 }
        }
        exit={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1 }}
      >
        <img
          src={AboutImage}
          alt="Our story illustration"
          className="w-full object-cover h-[90%] rounded-2xl shadow-lg"
        />
      </motion.div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:text-3xl lg:text-4xl  font-bold mb-6 lg:mb-8 text-dark capitalize"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-sm sm:text-base lg:text-lg text-muted mb-4 lg:mb-6 font-medium"
        >
          Triopecker was founded with a bold vision — to bridge the gap between
          advanced technology and creative marketing. We understood early on
          that businesses no longer succeed with fragmented solutions; they need
          comprehensive strategies that align innovation with measurable
          outcomes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              : { opacity: 0, y: 35 }
          }
          exit={{ opacity: 0, y: 35 }}
          className="text-sm sm:text-base lg:text-lg text-muted mb-4 lg:mb-6 font-medium"
        >
          What sets us apart is our forward-thinking approach and the diverse
          expertise of our team. We bring together engineers, designers, and
          strategists who share one mission: to create digital ecosystems where
          technology and creativity empower sustainable growth. Every project we
          take on is built with scalability, reliability, and real-world impact
          in mind.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
              : { opacity: 0, y: 20 }
          }
          exit={{ opacity: 0, y: 20 }}
          className="text-sm sm:text-base lg:text-lg text-muted font-medium"
        >
          While Triopecker is a young company, our ambition reaches far beyond
          the present. We are committed to becoming a trusted partner for
          businesses of all sizes — from startups with disruptive ideas to
          enterprises seeking digital transformation. For us, success is not
          just delivering a solution, but shaping the future together with our
          clients.
        </motion.p>
      </div>
    </div>
  );
};

export default CompanyStory;
