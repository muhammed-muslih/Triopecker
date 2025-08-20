import {
  PortfolioHero,
  CallToAction,
  PortfolioExpectations,
} from "../components";

const Portfolio = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <PortfolioHero />
      <PortfolioExpectations />
      <CallToAction />
    </section>
  );
};

export default Portfolio;
