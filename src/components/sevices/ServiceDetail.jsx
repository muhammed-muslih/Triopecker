import { useRef } from "react";
import { motion, useInView, spring, stagger } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { servicesDetailData } from "../../constants/menu";
import Button from "../ui/Button";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesDetailData[slug];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const navigate = useNavigate();

  const createTransition = (index) => ({
    delay: stagger(0.3, { start: 0.2 })(index),
    type: spring,
    stiffness: 150,
    damping: 20,
  });

  if (!service) return <p className="text-center py-20">Service not found.</p>;

  const Icon = service.icon;

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
          {service.title}
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
          {service.desc}
        </motion.p>
      </div>

      <div
        className="mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 bg-surface shadow-lg rounded-xl mb-12 
     "
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <span className="p-4 rounded-xl bg-accent/20 mb-4 text-dark cursor-pointer">
            <Icon size={32} />
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-dark capitalize">
            Overview
          </h2>
          <p className="text-muted text-lg leading-relaxed">{service.para}</p>
        </motion.div>

        {service.image && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="flex-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-102 shadow  hover:shadow-lg"
            />
          </motion.div>
        )}
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
            onClick={() => navigate(-1)}
          >
            Back To PreVious Page
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default ServiceDetail;
