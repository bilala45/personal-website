import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechIcon = ({ name, icon }) => (
  <span className="px-1.5 py-0.5 mx-1 rounded-md bg-slate-600 text-white text-sm font-normal">
    <FontAwesomeIcon className="mr-1" icon={icon} />
    {name}
  </span>
);

export default TechIcon;
