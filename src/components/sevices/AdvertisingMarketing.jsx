import { useRef } from "react";
import { motion, useInView, stagger, spring } from "motion/react";
import { advertisingMarketing } from "../../constants/menu";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

const AdvertisingMarketing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const navigate = useNavigate();

  const createTransition = (index) => ({
    delay: stagger(0.3, { start: 0.2 })(index),
    type: spring,
    stiffness: 150,
    damping: 20,
  });

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
          Advertising & Marketing
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
          We help brands grow through data-driven campaigns, creative design,
          and storytelling.
        </motion.p>
      </div>
      <div className="px-6 mx-auto mb-10">
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
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advertisingMarketing?.items.map((service, index) => (
            <Card
              key={service.name}
              index={index}
              isInView={isInView}
              Icon={service.icon}
              title={service.name}
              desc={service.desc}
              link={service.link}
            />
          ))}
        </div>
      </div>

      <div className="flex-center justify-center gap-6 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          exit={{ opacity: 0, y: 40 }}
          transition={createTransition(0)}
        >
          <Button
            variant="primary"
            className="w-fit"
            onClick={() => navigate("/services")}
          >
            Explore Our All Services
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          exit={{ opacity: 0, y: 40 }}
          transition={createTransition(1)}
        >
          <Button
            variant="secondary"
            className="w-fit"
            onClick={() => navigate("/services/technology-solutions")}
          >
            Explore Technology Solutions
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvertisingMarketing;
