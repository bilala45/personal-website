import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  // add padding above and below links and center
  <div className="flex justify-center mt-6">
    <div className="flex p-1 sm:px-1.5 rounded-full max-w-fit bg-sky-500">
      <a
        className="text-2xl sm:text-3xl px-3 sm:px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
        href="https://github.com/bilala45"
      >
        <FaGithub />
      </a>
      <a
        className="text-2xl sm:text-3xl px-3 sm:px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
        href="https://www.linkedin.com/in/bilal-ali1/"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="text-2xl sm:text-3xl px-3 sm:px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
        href="mailto: bilalali@seas.upenn.edu"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
);

export default Contact;
