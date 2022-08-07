import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ResourceVideo = ({ author, name, link }) => {
  return (
    <div className="pt-2">
      {name === "various playlists" ? (
        <div>
          <FontAwesomeIcon className="ml-1 mr-2" icon={faYoutube} />
          <a
            className="text-indigo-500 font-medium hover:underline decoration-[3px] underline-offset-2 decoration-indigo-500"
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
            className="text-indigo-500 font-medium hover:underline decoration-[3px] underline-offset-2 decoration-indigo-500"
            href={link}
          >
            {author}'s <span className="italic">{name}</span>
          </a>
        </div>
      )}
    </div>
  );
};
export default ResourceVideo;
