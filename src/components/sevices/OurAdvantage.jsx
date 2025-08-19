import { features } from "../../constants/menu";
import Card from "../ui/Card";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const OurAdvantage = () => {
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
        The Triopecker Advantage
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features?.map((feature, index) => (
          <Card
            key={feature.title}
            index={index}
            isInView={isInView}
            Icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default OurAdvantage;
