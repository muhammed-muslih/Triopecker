import { X } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../ui/Button";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex-center justify-center z-[999] ">
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
        <form className="space-y-4">
          <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
            <IoPersonSharp className="text-dark text-2xl cursor-pointer" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-none outline-none w-full text-dark"
            />
          </div>
          <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
            <MdEmail className="text-dark text-2xl cursor-pointer" />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-none outline-none w-full text-dark"
            />
          </div>
          <div className="bg-accent/20 flex-center gap-3 p-2.5 rounded border-b-2 border-transparent focus-within:border-dark">
            <textarea
              placeholder="Your Project Details"
              rows="6"
              className="bg-transparent border-none outline-none w-full text-dark"
            ></textarea>
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
