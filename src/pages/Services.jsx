import {
  Services as ServiceComponent,
  CoreValues,
  FeaturedServices,
  CallToAction,
} from "../components";

const Services = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <ServiceComponent />
      <FeaturedServices />
      <CoreValues />
      <CallToAction />
    </section>
  );
};
export default Services;
