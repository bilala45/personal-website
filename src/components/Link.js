import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// accepts icon name as prop
const Link = ({ icon }) => {
  return (
    <span className="text-5xl px-5">
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default Link;
