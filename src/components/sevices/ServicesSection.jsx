import ServicesCard from "../ui/ServicesCard";
import { homeServiceSectionData } from "../../constants/menu";
import { useRef } from "react";
import { motion, useInView, spring, stagger } from "motion/react";

const ServicesSection = () => {
  const serviceSectionRef = useRef(null);

  const isInView = useInView(serviceSectionRef);

  return (
    <div className="w-full" ref={serviceSectionRef}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-3xl md:text-4xl text-dark font-bold mb-4 capitalize"
        >
          Our Services
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
          From cutting-edge technology to impactful marketing, we provide
          end-to-end solutions that help businesses grow.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {homeServiceSectionData?.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              delay: stagger(0.3, { start: 0.2 })(index),
              type: spring,
              stiffness: 150,
              damping: 20,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            key={service.name}
          >
            <ServicesCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
