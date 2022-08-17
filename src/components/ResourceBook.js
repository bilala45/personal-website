import { FaBook } from "react-icons/fa";

const ResourceBook = ({ name, author, link }) => (
  <div className="pt-2 flex items-center">
    <FaBook className="ml-1.5 mr-2.5" />
    <a
      className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
      href={link}
    >
      <span className="italic">{name}</span> (by {author})
    </a>
  </div>
);

export default ResourceBook;
