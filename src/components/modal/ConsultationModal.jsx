import { X } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../ui/Button";
import {
  contactInitialValues,
  contactValidationSchema,
  handleContactSubmit,
} from "../../utils/contactFormConfig";

import { useFormik } from "formik";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: handleContactSubmit,
  });

  return (
    <div className="fixed inset-0 bg-black/60 flex-center justify-center z-[900] ">
      <div className="bg-bg rounded-2xl p-8 w-full max-w-md text-dark shadow-xl relative flex flex-col overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition cursor-pointer"
        >
          <X />
        </button>
        <div className="text-center my-6">
          <h3 className="text-2xl font-bold mb-2 capitalize">
            Get a Free Consultation
          </h3>
          <p className="text-muted">
            Fill out the form and we&apos;ll get back to you shortly.
          </p>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
              <IoPersonSharp className="text-dark text-2xl cursor-pointer" />
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                autoComplete="off"
                placeholder="Your Name"
                className="bg-transparent border-none outline-none w-full text-dark"
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-500 text-sm">{formik.errors.name}</span>
            )}
          </div>
          <div>
            <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
              <MdEmail className="text-dark text-2xl cursor-pointer" />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                autoComplete="off"
                placeholder="Your Email"
                className="bg-transparent border-none outline-none w-full text-dark"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>
          <div>
            <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
              <textarea
                placeholder="Your Project Details"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="5"
                required
                autoComplete="off"
                className="bg-transparent border-none outline-none w-full text-dark"
              ></textarea>
            </div>
            {formik.touched.message && formik.errors.message && (
              <span className="text-red-500 text-[12px] md:text-sm">
                {formik.errors.message}
              </span>
            )}
          </div>
          <Button variant="primary" className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
