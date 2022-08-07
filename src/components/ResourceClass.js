import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";

const ResourceClass = ({ name, link }) => (
  <div className="pt-2">
    <FontAwesomeIcon className="ml-[5px] mr-2.5" icon={faLandmark} />
    <a
      className="text-indigo-500 font-medium hover:underline decoration-[3px] underline-offset-2 decoration-indigo-500"
      href={link}
    >
      {name}
    </a>
  </div>
);

export default ResourceClass;
