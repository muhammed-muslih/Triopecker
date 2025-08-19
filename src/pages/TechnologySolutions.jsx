import {
  TechnologySolutionsSection,
  OurAdvantage,
  CallToAction,
  OurProcess,
} from "../components";

const TechnologySolutions = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <TechnologySolutionsSection />
      <OurAdvantage />
      <OurProcess />
      <CallToAction />
    </section>
  );
};

export default TechnologySolutions;
