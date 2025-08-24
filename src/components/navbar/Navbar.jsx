import Logo from "../../assets/logo/triopecker-logo.png";
import { Menus } from "../../constants/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import ConsultationModal from "../modal/ConsultationModal";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="flex-center-between w-full">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-x-0 z-[50] relative cursor-pointer"
      >
        <img src={Logo} alt="logo" className="size-20 lg:size-24" />
        <h3 className="text-md lg:text-lg font-bold uppercase text-brand tracking-widest">
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
        <Button
          variant="primary"
          onClick={() => setModalIsOpen(true)}
          className="w-fit"
          customStyle="z-[50] relative px-3 py-1.5 rounded-xl flex-center font-medium shadow md:font-semibold text-xs md:text-sm cursor-pointer capitalize"
        >
          Get Started
        </Button>
        <div className="lg:hidden">
          <MobileMenu Menus={Menus} />
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </nav>
  );
};
export default Navbar;
