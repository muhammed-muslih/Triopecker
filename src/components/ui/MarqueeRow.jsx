import { motion } from "motion/react";

const MarqueeRow = ({ items, speed = 20 }) => {
  return (
    <div className="overflow-hidden relative w-full py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex-center gap-2 text-base  md:text-lg lg:text-xl font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-3xl">
              <tech.icon />
            </span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default MarqueeRow;
