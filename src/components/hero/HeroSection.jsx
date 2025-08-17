import HeroBg1 from "../../assets/hero/hero-bg-1.png";
import HeroBg2 from "../../assets/hero/hero-bg-2.png";
import HeroBg3 from "../../assets/hero/hero-bg-3.png";
import HeroBg4 from "../../assets/hero/hero-bg-4.png";
import HeroBg5 from "../../assets/hero/hero-bg-5.png";
import HeroBg6 from "../../assets/hero/hero-bg-6.png";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, spring } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    img: HeroBg1,
    heading: "Innovate Smart",
    text: "Cutting-edge software to optimize workflows and accelerate growth.",
  },
  {
    img: HeroBg2,
    heading: "Brand Impact",
    text: "Futuristic ad campaigns that captivate and elevate your presence.",
  },
  {
    img: HeroBg3,
    heading: "Tech + Marketing",
    text: "Seamless integration of advanced tech and strategic campaigns.",
  },
  {
    img: HeroBg4,
    heading: "Code Future",
    text: "Sophisticated software turning ideas into scalable solutions.",
  },
  {
    img: HeroBg5,
    heading: "Marketing Edge",
    text: "Strategically designed campaigns that engage and inspire audiences.",
  },
  {
    img: HeroBg6,
    heading: "Lead Innovation",
    text: "Empowering businesses with smart tech solutions and dynamic campaigns.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  // Preload all images
  useEffect(() => {
    heroImages.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  // Start auto timer once
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % heroImages.length);
      setLoaded(false);
    }, 5000);
  };

  const handlePrev = () => {
    setLoaded(false);
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    startTimer();
  };

  const handleNext = () => {
    setLoaded(false);
    setCurrent((prev) => (prev + 1) % heroImages.length);
    startTimer();
  };

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden flex-center justify-center ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
          exit={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <img
            src={heroImages[current].img}
            alt="Hero background"
            className="w-full h-full object-cover"
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>
      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C9A77D55] via-transparent to-transparent opacity-40"></div>

      <div className="relative  z-10 max-w-5xl px-6 text-center text-surface space-y-10">
        <AnimatePresence mode="wait">
          {loaded && (
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                {heroImages[current].heading}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-edge mt-2 max-w-2xl mx-auto"
              >
                {heroImages[current].text}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 flex-center justify-center"
              >
                <motion.button
                  initial={false}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      type: spring,
                      stiffness: 400,
                      damping: 20,
                      mass: 0.7,
                    },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: {
                      type: spring,
                      stiffness: 700,
                      damping: 30,
                      mass: 1,
                    },
                  }}
                  className="px-8 py-3 md:px-10 md:py-4 text-lg rounded-2xl 
                  bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-accent)] text-surface
                 shadow-lg opacity-90 hover:opacity-75 transition cursor-pointer"
                >
                  Our Services
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={handlePrev}
        disabled={!loaded}
        className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-surface z-10
           p-2 md:p-3 rounded-full transition cursor-pointer ${
             !loaded ? "opacity-50 pointer-events-none" : ""
           }`}
      >
        <ChevronLeft className="size-4 md:size-6" strokeWidth={3} />
      </button>

      <button
        onClick={handleNext}
        disabled={!loaded}
        className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-surface z-10
          p-2 md:p-3 rounded-full transition cursor-pointer ${
            !loaded ? "opacity-50 pointer-events-none" : ""
          }`}
      >
        <ChevronRight className="size-4 md:size-6" strokeWidth={3} />
      </button>

      {/* Decorative Glow Shapes */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C9A77D22] blur-3xl top-[-10%] left-[-10%]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#8B5E3C33] blur-2xl bottom-[-10%] right-[-10%]" />
    </section>
  );
};
export default HeroSection;
