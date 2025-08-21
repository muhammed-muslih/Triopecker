import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { showSuccessToast, showErrorToast } from "../components/ui/CustomToast";

export const contactInitialValues = {
  name: "",
  email: "",
  message: "",
};

export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .test(
      "not-only-whitespace",
      "Name cannot be empty or only spaces",
      (value) => value && value.trim().length > 0
    )
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be 30 characters or less"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email address"),
  message: Yup.string()
    .min(20, "Message must be at least 20 characters long")
    .required("Message is required"),
});

export const handleContactSubmit = async (values, actions) => {
  console.log("Form submitted:", values);
  const { name, email, message } = values;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    // to_email: "triopecker@gmail.com",
  };

  const autoReplyParams = {
    from_name: values.name,
    from_email: values.email,
    email: values.email,
  };

  try {
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const adminTemplateId = import.meta.env.VITE_EMAIL_ADMIN_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAIL_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);

    await emailjs.send(
      serviceId,
      autoReplyTemplateId,
      autoReplyParams,
      publicKey
    );
    showSuccessToast();

    actions.resetForm();
  } catch (error) {
    console.error("Error sending email:", error);
    showErrorToast();
  }
};
