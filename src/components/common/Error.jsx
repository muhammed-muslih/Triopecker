import { useNavigate } from "react-router";
import { FaExclamationCircle } from "react-icons/fa";
import Button from "../ui/Button";

const Error = ({ message = "Oops! Something went wrong." }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[60vh]  bg-surface  shadow-lg text-center px-4 rounded-xl border border-edge">
      <FaExclamationCircle className="text-6xl text-brand mb-4 animate-bounce" />
      <h1 className="text-4xl font-extrabold text-brand mb-2">Error</h1>
      <p className="text-brand/90 text-lg mb-6">{message}</p>
      <Button variant="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default Error;
