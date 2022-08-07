import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectLink = ({ icon, link, name }) => (
  <span className="mr-6">
    <FontAwesomeIcon icon={icon} />
    <a href={link}>
      <span className="ml-2 font-medium text-indigo-500 hover:underline decoration-4 underline-offset-2">
        {name}
      </span>
    </a>
  </span>
);

export default ProjectLink;
