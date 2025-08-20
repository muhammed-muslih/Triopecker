import {
  HeroSection,
  ServicesSection,
  CoreValues,
  TestimonialsSection,
  CallToAction,
  WhyChooseUs,
  FeaturedServices,
} from "../components";

const Home = () => {
  return (
    <section className="">
      <div className="w-full max-w-[2592px]">
        <HeroSection />
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16">
        <ServicesSection />
        <CoreValues />
        <WhyChooseUs />
        <FeaturedServices />
        <TestimonialsSection />
        <CallToAction />
      </div>
    </section>
  );
};
export default Home;
