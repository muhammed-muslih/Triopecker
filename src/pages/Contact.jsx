import { ContactHero, ContactForm } from "../components";
const Contact = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-16 py-16 mt-16">
      <ContactHero />
      <ContactForm />
    </section>
  );
};
export default Contact;
