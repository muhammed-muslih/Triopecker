import { HeroSection } from "../components";
import ServicesSection from "../components/sevices/ServicesSection";

const HomePage = () => {
  return (
    <>
      {/* Full-width hero */}
      <HeroSection />

      {/* Constrained sections */}
      <section className="w-full max-w-[1440px] mx-auto px-4 py-16">
        <ServicesSection />
      </section>
    </>
  );
};
export default HomePage;
