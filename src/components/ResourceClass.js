import { FaLandmark } from "react-icons/fa";

const ResourceClass = ({ name, link }) => (
  <div className="pt-2 flex items-center">
    <FaLandmark className="ml-[5px] mr-2.5" />
    <a
      className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
      href={link}
    >
      {name}
    </a>
  </div>
);

export default ResourceClass;
