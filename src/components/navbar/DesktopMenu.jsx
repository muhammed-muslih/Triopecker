import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, spring, stagger } from "motion/react";
import { NavLink } from "react-router";

const DesktopMenu = ({ menu, index }) => {
  const [isHover, setIsHover] = useState(false);

  const hidden = { opacity: 0, y: -10 };
  const visible = { opacity: 1, y: 0 };
  const createTransition = (index) => ({
    delay: stagger(0.08, { start: 0.1 })(index),
    type: spring,
    stiffness: 150,
    duration: 0.3,
    damping: 20,
  });

  const hasSubMenu = menu?.submenu?.length > 0;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      initial={hidden}
      animate={visible}
      transition={createTransition(index)}
    >
      <NavLink
        to={menu.link}
        end={menu.link === "/"} 
        className={({ isActive }) =>
          `flex-center gap-0.5 cursor-pointer px-4 py-1 rounded-xl font-semibold capitalize hover:bg-accent/20 ${
            (isActive ||
              (menu.link === "/services" &&
                window.location.pathname.startsWith("/services"))) &&
            "bg-accent/20"
          }`
        }
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.8px] text-dark group-hover/link:rotate-180 duration-200 transition-transform" />
        )}
      </NavLink>

      {hasSubMenu && (
        <motion.div
          className="sub-menu origin-top"
          initial={{ opacity: 0, rotateX: -15, pointerEvents: "none" }}
          animate={
            isHover
              ? { opacity: 1, rotateX: 0, pointerEvents: "auto" }
              : { opacity: 0, rotateX: -15, pointerEvents: "none" }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-6 p-6">
            {menu?.submenu?.map((section, i) => (
              <div key={i} className="relative">
                <h4 className="font-bold text-md text-dark mb-3">
                  {section.heading}
                </h4>
                <ul className="space-y-5">
                  {section.items.map((item, id) => (
                    <li key={id} className="flex-center gap-x-4 group/menubox">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          `flex-center gap-x-4 w-full cursor-pointer transition-colors ${
                            isActive ? "font-bold text-brand" : ""
                          }`
                        }
                      >
                        <span className="bg-accent/20 w-fit p-3 rounded-md group-hover/menubox:bg-brand group-hover/menubox:text-surface transition-colors">
                          <item.icon />
                        </span>
                        <div>
                          <p className="text-sm font-bold">{item.name}</p>
                          <p className="text-sm text-muted">{item.desc}</p>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
