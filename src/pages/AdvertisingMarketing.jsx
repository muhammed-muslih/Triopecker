import {
  AdvertisingMarketing as AdvertisingMarketingSection,
  OurAdvantage,
  CallToAction,
  OurProcess,
  FAQAccordion,
} from "../components";

const AdvertisingMarketing = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <AdvertisingMarketingSection />
      <OurAdvantage />
      <OurProcess />
      <FAQAccordion/>
      <CallToAction />
    </section>
  );
};

export default AdvertisingMarketing;
