import Logo from "../../assets/triopecker-logo.png";
import { Menus } from "../../constants/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex-center-between w-full">
      <div className="flex items-center gap-x-0 z-[999] relative">
        <img src={Logo} alt="logo" className="size-20 lg:size-24" />
        <h3 className="text-md lg:text-lg font-bold uppercase text-brand">
          Triopecker
        </h3>
      </div>

      {/* Menus */}
      {/* Desktop */}
      <ul className="lg:flex hidden items-center gap-x-3">
        {Menus.map((menu, i) => (
          <DesktopMenu menu={menu} key={menu.name} index={i} />
        ))}
      </ul>
      <div className="flex-center gap-x-4">
        <button className="btn z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center font-medium  md:font-semibold text-xs md:text-sm cursor-pointer capitalize">
          Get a Quote
        </button>
        <div className="lg:hidden">
          <MobileMenu Menus={Menus} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
