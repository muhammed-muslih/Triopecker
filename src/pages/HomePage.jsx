import { HeroSection, ServicesSection, WhyChooseUs } from "../components";

const HomePage = () => {
  return (
    <>
      {/* Full-width hero */}
      <HeroSection />

      {/* service section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 pt-16">
        <ServicesSection />
      </section>

      <section className="w-full max-w-[1440px] mx-auto px-4 py-16">
        <WhyChooseUs />
      </section>
    </>
  );
};
export default HomePage;
