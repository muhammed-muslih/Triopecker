import { motion } from "motion/react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  customStyle = "",
}) => {
  const defaultStyle =
    "px-8 py-3 md:px-10 md:py-4 text-sm lg:text-base rounded-2xl cursor-pointer font-semibold tracking-wide relative overflow-hidden hover:shadow-xl";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-brand)] to-[var(--color-accent)] text-surface shadow-lg",
    secondary:
      "bg-white/60 backdrop-blur-md text-[var(--color-dark)] border border-[var(--color-edge)] hover:bg-[var(--color-accent)] hover:text-surface",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={false}
      whileHover={{
        scale: 1.01,
        boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
      }}
      className={`${customStyle || defaultStyle} ${variants[variant] || ""} ${
        className || ""
      }`}
    >
      {children}
      {/* Glow effect layer */}
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
    </motion.button>
  );
};

export default Button;
