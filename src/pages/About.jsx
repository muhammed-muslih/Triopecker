import {
  AboutHero,
  CompanyStory,
  MissionVision,
  CoreValues,
  CallToAction,
  WhyChooseUs,
} from "../components";

const About = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <CallToAction />
    </section>
  );
};
export default About;
