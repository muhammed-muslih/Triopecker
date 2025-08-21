import toast from "react-hot-toast";
import { X } from "lucide-react";

export const showSuccessToast = () =>
  toast.custom(
    (t) => (
      <div
        className={`relative text-center p-6 rounded-2xl bg-green-100 shadow-lg border border-green-700 transform transition-all z-[999] ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <button
          onClick={() => toast.dismiss(t.id)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <X size={18} />
        </button>
        <h2 className="text-lg font-semibold text-green-700 mb-1">
          Success 🎉
        </h2>
        <p className="text-green-800 text-sm">
          Your message has been sent successfully!
        </p>
      </div>
    ),
    { duration: 4000 }
  );

export const showErrorToast = () =>
  toast.custom(
    (t) => (
      <div
        className={`relative text-center p-6 rounded-2xl bg-red-100 shadow-lg border  border-red-700 transform transition-all z-[999] ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <button
          onClick={() => toast.dismiss(t.id)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <X size={18} />
        </button>
        <h2 className="text-lg font-semibold text-red-700 mb-1">Oops! ❌</h2>
        <p className="text-red-800 text-sm">
          Failed to send your message. Please try again.
        </p>
      </div>
    ),
    { duration: 4000 }
  );
