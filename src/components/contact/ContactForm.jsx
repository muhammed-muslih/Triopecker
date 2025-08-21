import contactImage from "../../assets/contact/contact-page-img.png";
import Button from "../ui/Button";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import {
  contactInitialValues,
  contactValidationSchema,
  handleContactSubmit,
} from "../../utils/contactFormConfig";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: handleContactSubmit,
  });

  return (
    <div className="bg-bg text-dark px-6 overflow-x-hidden" ref={sectionRef}>
      <Toaster position="top-center" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1.05 }
          }
          exit={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1 }}
          src={contactImage}
          alt="Contact illustration"
          className="drop-shadow-2xl h-80 w-full rounded-xl mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : { opacity: 0, y: 50 }
          }
          exit={{ opacity: 0, y: 50 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 text-dark capitalize text-center"
        >
          Tell Us About Your Project
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:col-span-2 bg-surface p-8 rounded-2xl shadow border border-edge"
        >
          <form className="space-y-5 text-dark" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                autoComplete="off"
                className="w-full rounded-xl border border-edge/60 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="Your Name"
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-500 text-sm">
                  {formik.errors.name}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                autoComplete="off"
                className="w-full rounded-xl border border-edge/60 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="Your Email"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="6"
                required
                autoComplete="off"
                className="w-full rounded-xl border border-edge/60 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="Tell us about your project..."
              />
              {formik.touched.message && formik.errors.message && (
                <span className="text-red-500 text-[12px] md:text-sm">
                  {formik.errors.message}
                </span>
              )}
            </div>
            <Button variant="primary" type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="bg-surface p-8 rounded-2xl shadow border border-edge"
        >
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand" /> triopecker@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="w-5 h-5 text-brand" /> +91 98765 43210
            </p>
          </div>

          <div className="border-t border-edge my-6"></div>

          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-3">
            <IconLink href="https://linkedin.com">
              <FaLinkedin className="w-5 h-5" />
            </IconLink>
            <IconLink href="https://github.com">
              <FaGithub className="w-5 h-5" />
            </IconLink>
            <IconLink href="https://instagram.com">
              <FaInstagram className="w-5 h-5" />
            </IconLink>
            <IconLink href="">
              <FaWhatsapp className="w-5 h-5" />
            </IconLink>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default ContactForm;

function IconLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-edge
      w-10 h-10 text-muted hover:text-dark hover:border-accent
     hover:bg-edge/40 transition"
    >
      {children}
    </a>
  );
}
