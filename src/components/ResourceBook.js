import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const ResourceBook = ({ name, author, link }) => (
  <div className="pt-2">
    <FontAwesomeIcon className="ml-1.5 mr-2.5" icon={faBook} />

    <a
      className="text-indigo-500 font-medium hover:underline decoration-[3px] underline-offset-2 decoration-indigo-500"
      href={link}
    >
      <span className="italic">{name}</span> (by {author})
    </a>
  </div>
);

export default ResourceBook;
