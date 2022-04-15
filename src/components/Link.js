import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// accepts icon name as prop
const Link = ({ icon, link }) => {
  return (
    <span className="text-4xl px-5">
      <a className="hover:text-[#00bad6]" href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};

export default Link;
