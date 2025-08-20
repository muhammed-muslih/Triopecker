import {
  ServiceDetail,
  CallToAction,
  OurProcess,
  FAQAccordion,
} from "../components";
const SingleService = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <ServiceDetail />
      <OurProcess />
      <FAQAccordion />
      <CallToAction />
    </section>
  );
};

export default SingleService;
