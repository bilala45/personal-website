const ResourceLink = ({ name, link }) => (
  <a
    className="text-sky-600 hover:underline hover:underline-offset-4 decoration-1 decoration-slate-300"
    href={link}
  >
    {name}
  </a>
);

export default ResourceLink;
