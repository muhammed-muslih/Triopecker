import { whyChooseUs } from "../../constants/menu";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Card from "../ui/Card";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <div className="w-full " ref={sectionRef}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4 capitalize"
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
          We&apos;re more than just a service provider — we&apos;re a partner in
          your journey, offering scalable, reliable, and future-ready solutions.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChooseUs.map((item, index) => (
          <Card
            key={item.title}
            index={index}
            isInView={isInView}
            Icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
