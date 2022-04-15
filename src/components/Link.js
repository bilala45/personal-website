import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// accepts icon name as prop
const Link = ({ icon, link }) => {
  return (
    <span className="text-5xl px-5">
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};

export default Link;
