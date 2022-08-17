import { GrCode } from "react-icons/gr";

const ProjectLink = ({ icon, link, name }) => (
  <span className="mr-6 flex items-center">
    <GrCode />
    <a href={link}>
      <span className="ml-2 underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300">
        {name}
      </span>
    </a>
  </span>
);

export default ProjectLink;
