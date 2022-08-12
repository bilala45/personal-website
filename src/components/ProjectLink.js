import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectLink = ({ icon, link, name }) => (
  <span className="mr-6">
    <FontAwesomeIcon icon={icon} />
    <a href={link}>
      <span className="ml-2 underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300">
        {name}
      </span>
    </a>
  </span>
);

export default ProjectLink;
