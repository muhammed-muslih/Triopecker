import { motion, useInView, stagger, spring } from "motion/react";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import ConsultationModal from "../modal/ConsultationModal";
import { useNavigate } from "react-router";

const CallToAction = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
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
          Ready to Build the Future with{" "}
          <span className="text-brand">Triopecker </span>?
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
          Let&apos;s discuss how our innovative solutions can scale with your
          vision.
        </motion.p>
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
            onClick={() => setModalIsOpen(true)}
          >
            Get a Free Consultation
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
            onClick={() => navigate("/contact")}
          >
            Let&apos;s Work Together
          </Button>
        </motion.div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export default CallToAction;
