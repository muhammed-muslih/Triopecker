import { concepts } from "../../constants/menu";
import { useRef } from "react";
import { motion, useInView, spring, stagger } from "motion/react";
import { useNavigate } from "react-router";

const PortfolioHero = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(sectionRef, { once: true });

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
          className="text-2xl sm:text-3xl lg:text-4xl  text-dark font-bold mb-4 capitalize"
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-base md:text-lg text-muted max-w-3xl mx-auto"
        >
          We&apos;re building meaningful projects and partnerships. Our
          portfolio is coming soon — showcasing how Triopecker helps brands grow
          through technology, creativity, and innovation.
        </motion.p>
      </div>
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {concepts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              delay: stagger(0.3, { start: 0.2 })(i),
              type: spring,
              stiffness: 150,
              damping: 20,
            }}
            className="bg-surface rounded-xl shadow hover:shadow-lg overflow-hidden cursor-pointer 
            transition-transform duration-300 hover:scale-105"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-dark ">
                {c.title}
              </h3>
              <p className="text-muted text-sm">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioHero;
