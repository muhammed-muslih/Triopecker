import { motion } from "motion/react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "px-8 py-3 md:px-10 md:py-4 text-sm lg:text-base rounded-2xl cursor-pointer font-semibold tracking-wide relative overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-accent)] text-surface shadow-lg",
    secondary: "bg-brand text-surface hover:bg-gray-200 shadow",
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
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      {/* Glow effect layer */}
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
    </motion.button>
  );
};

export default Button;
