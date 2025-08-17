import Button from "./Button";

const ServicesCard = ({ service }) => {
  return (
    <div
      className="flex flex-col bg-surface rounded-2xl shadow-lg overflow-hidden h-full 
    group/card cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={service?.image}
        alt="Technology Solutions"
        className="w-full h-56 object-cover"
      />
      <div className="p-8 flex flex-col justify-between flex-1 ">
        <h3 className="capitalize text-xl md:text-2xl font-bold text-dark mb-4 md:mb-6 text-center">
          {service.name}
        </h3>
        <ul className="space-y-4 lg:space-y-6 text-text mb-6">
          {service.items.map((item) => (
            <li className="flex-center gap-x-4" key={item.name}>
              <span className="bg-accent/20 w-fit p-3 rounded-md">
                <item.icon />
              </span>
              <div>
                <p className="text-base md:text-lg font-semibold">
                  {item.name}
                </p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button variant="primary" className="w-fit">
          Explore Technology Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
