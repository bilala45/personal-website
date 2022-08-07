import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechIcon = ({ name, icon }) => (
  <span className="px-1.5 mr-1 rounded-md inline-block bg-slate-600 text-white text-sm font-normal">
    <FontAwesomeIcon className="mr-1" icon={icon} />
    {name}
  </span>
);

export default TechIcon;
