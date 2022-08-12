import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";

const ResourceClass = ({ name, link }) => (
  <div className="pt-2">
    <FontAwesomeIcon className="ml-[5px] mr-2.5" icon={faLandmark} />
    <a
      className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
      href={link}
    >
      {name}
    </a>
  </div>
);

export default ResourceClass;
