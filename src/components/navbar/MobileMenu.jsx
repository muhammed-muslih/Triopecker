import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const MobileMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="z-[999] relative cursor-pointer mt-1.5"
      >
        {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
      </button>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-surface backdrop-blur-md p-6 font-bold"
      >
        <ul>
          {Menus?.map(({ name, submenu }, i) => {
            const hasSubMenu = submenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={name}>
                <span
                  onClick={() => setClicked(isClicked ? null : i)}
                  className="flex-center-between p-4 hover:bg-accent/20 rounded-md cursor-pointer capitalize relative"
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform  ${
                        isClicked && "rotate-180"
                      }`}
                    />
                  )}
                </span>
                {hasSubMenu && isClicked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {submenu?.map((section, i) => (
                      <div key={i} className="py-2">
                        <h4 className="font-bold text-dark mb-3 text-center pb-2">
                          {section.heading}
                        </h4>
                        <ul className="space-y-2 ml-5">
                          {section.items.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.08,
                                duration: 0.25,
                                ease: "easeOut",
                              }}
                              className="p-3 rounded-md transition-colors flex-center gap-x-2 hover:bg-accent/20"
                            >
                              <item.icon size={18} />
                              <p className="text-sm font-medium">{item.name}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
