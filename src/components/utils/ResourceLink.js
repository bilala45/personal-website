const ResourceLink = ({ name, link }) => (
  //   <span className="mr-6 flex items-center">
  //     <a href={link}>
  //       <span className="ml-2 underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300">
  //         {name}
  //       </span>
  //     </a>
  //   </span>

  <a
    className="text-sky-600 hover:underline hover:underline-offset-4 decoration-1 decoration-slate-300"
    href={link}
  >
    {name}
  </a>
);

export default ResourceLink;
