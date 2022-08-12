import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ResourceVideo = ({ author, name, link }) => {
  return (
    <div className="pt-2">
      {name === "various playlists" ? (
        <div>
          <FontAwesomeIcon className="ml-1 mr-2" icon={faYoutube} />
          <a
            className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
            href={link}
          >
            {author} ({name})
          </a>
        </div>
      ) : (
        <div>
          {" "}
          <FontAwesomeIcon className="ml-1 mr-2" icon={faYoutube} />
          <a
            className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
            href={link}
          >
            {author}'s <span className="italic">{name}</span> playlist
          </a>
        </div>
      )}
    </div>
  );
};
export default ResourceVideo;
