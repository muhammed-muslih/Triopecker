import { featuredServices } from "../../constants/menu";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Card from "../ui/Card";

const FeaturedServices = () => {
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
          Featured Services
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
          Explore our key services designed to help your business thrive. From
          custom web and mobile solutions to creative branding and effective
          digital marketing, we deliver innovative and tailored strategies that
          drive results.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredServices.map((service, index) => (
          <Card
            key={service.name}
            index={index}
            isInView={isInView}
            Icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default FeaturedServices;
