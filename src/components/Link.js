import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// accepts icon name as prop
const Link = ({ icon, link }) => {
  // add breakpoint to remove white highlight for mobile
  return (
    <span className="text-4xl px-5 text-white rounded-full hover:text-black hover:bg-white">
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};

export default Link;
