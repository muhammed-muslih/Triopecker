import { testimonials } from "../../constants/menu";
import { Quote } from "lucide-react";
import MarqueeRow from "../ui/MarqueeRow";
import { techLogos, marketingLogos } from "../../constants/icons";
import { motion, useInView, stagger, spring } from "motion/react";
import { useRef } from "react";

const TestimonialsSection = () => {
  const testimonialSectionRef = useRef(null);
  const isInView = useInView(testimonialSectionRef, { once: true });

  return (
    <div className="w-full" ref={testimonialSectionRef}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 75 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 75 }
          }
          exit={{ opacity: 0, y: 75 }}
          className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-dark mb-4"
        >
          Trusted Technology, Built for You
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
          Triopecker delivers innovative, scalable, and reliable solutions that
          help businesses thrive in a rapidly evolving digital landscape.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {testimonials.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              delay: stagger(0.3, { start: 0.2 })(index),
              type: spring,
              stiffness: 150,
              damping: 20,
            }}
            className="relative flex flex-col items-center text-center p-8 bg-surface rounded-2xl shadow hover:shadow-lg
            transition-transform duration-300 hover:scale-105 cursor-pointer group/card"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-accent)] rounded-t-2xl"></div>
            <span
              className="p-4 rounded-xl bg-accent/20 text-accent mb-6 group-hover/card:bg-brand
             group-hover/card:text-surface transition-colors"
            >
              <Quote size={32} />
            </span>
            <p className="text-muted">{text}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-accent)] rounded-lg">
          <MarqueeRow items={techLogos} speed={20} />
        </div>
        <div className="w-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-dark)] rounded-lg ">
          <MarqueeRow items={marketingLogos} speed={25} />
        </div>
      </div>
    </div>
  );
};
export default TestimonialsSection;
