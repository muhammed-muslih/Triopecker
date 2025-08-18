import {
  HeroSection,
  ServicesSection,
  WhyChooseUs,
  TestimonialsSection,
  CallToAction,
} from "../components";

const HomePage = () => {
  return (
    <>
      {/* Full-width hero */}
      <div className="w-full max-w-[2592px] mx-auto">
        <HeroSection />
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16">
        {/* service section */}
        <section>
          <ServicesSection />
        </section>

        <section>
          <WhyChooseUs />
        </section>

        <section>
          <TestimonialsSection />
        </section>

        <section>
          <CallToAction />
        </section>
      </div>
    </>
  );
};
export default HomePage;
