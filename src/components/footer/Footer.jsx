import Logo from "../../assets/logo/triopecker-logo.png";
import { footerMenu, footerServices, footerIcon } from "../../constants/menu";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
      <div className="col-span-2">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-x-0 z-[50] relative cursor-pointer"
        >
          <img src={Logo} alt="logo" className="size-20 lg:size-24" />
          <h3 className="text-md lg:text-lg font-bold uppercase text-brand">
            Triopecker
          </h3>
        </div>
        <p className="text-base text-dark font-semibold">
          Innovation. Scalability. Trust.
        </p>
        <p className="text-base text-dark font-semibold">
          Turning ideas into scalable, impactful products.
        </p>
      </div>

      <div>
        <h4 className=" text-base font-bold text-brand mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-dark">
          {footerMenu.map((menu) => (
            <li key={menu.title}>
              <Link
                to={menu.href}
                className="hover:text-accent transition-colors cursor-pointer hover:underline"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-brand mb-3 text-base">Services</h4>
        <ul className="space-y-2 text-sm text-dark">
          {footerServices.map((service) => (
            <li key={service.title}>
              <Link
                to={service.href}
                className="hover:text-accent transition-colors cursor-pointer hover:underline"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-base text-brand mb-3">
          Let&apos;s Connect
        </h4>
        <div className="flex gap-4 mb-4">
          {footerIcon.map((Icon, index) => (
            <a
              key={index}
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-accent text-dark transition-colors text-xl lg:text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="font-semibold text-brand">hello@triopecker.com</p>
      </div>
    </div>
  );
};
export default Footer;
