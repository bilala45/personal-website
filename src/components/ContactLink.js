import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// accepts icon name as prop
const ContactLink = ({ icon, link }) => {
  // add breakpoint to remove white highlight for mobile
  return (
    <span className="text-2xl sm:text-3xl px-3 sm:px-4 text-white rounded-full hover:text-black hover:bg-white">
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};

export default ContactLink;
