import { motion, stagger, spring } from "motion/react";
import { useNavigate } from "react-router";

const Card = ({ isInView = true, index, title, Icon, desc, link = "" }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <motion.div
      onClick={handleNavigate}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{
        delay: stagger(0.3, { start: 0.2 })(index),
        type: spring,
        stiffness: 150,
        damping: 20,
      }}
      className="flex flex-col items-center text-center p-8 bg-surface rounded-2xl shadow hover:shadow-lg
            transition-transform duration-300 hover:scale-105 cursor-pointer group/card"
    >
      <span
        className="p-4 rounded-xl bg-accent/20 text-accent mb-6 group-hover/card:bg-brand
             group-hover/card:text-surface transition-colors"
      >
        <Icon size={32} />
      </span>
      <h3 className="text-lg font-semibold text-dark mb-3">{title}</h3>
      <p className="text-muted text-sm">{desc}</p>
    </motion.div>
  );
};
export default Card;
