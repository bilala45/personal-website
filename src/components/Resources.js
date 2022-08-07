import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Resources = () => {
  return (
    <div className="text-md">
      <div className="text-md">
        There are many free online resources out there to help you learn math
        and computer science. Here are the ones I've enjoyed most!
      </div>
      <div>
        <div className="font-semibold pt-4">Programming Basics</div>
        <div className="pt-2">
          Composing Programs (by John Denero){" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faBook} />
        </div>

        <div className="font-semibold pt-4">Math</div>
        <div className="pt-2">
          TrevTutor's <span className="italic">Discrete Math 1</span>{" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faYoutube} />
        </div>
        <div className="pt-2">
          3Blue1Brown's{" "}
          <span className="italic">Essence of Linear Algebra</span>{" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faYoutube} />
        </div>

        <div className="font-semibold pt-4">Data Structures and Algorithms</div>
        <div className="pt-2">
          William Fiset (various playlists){" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faYoutube} />
        </div>
        <div className="pt-2">
          Abdul Bari's <span className="italic">Algorithms</span>{" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faYoutube} />
        </div>

        <div className="font-semibold pt-4">Web Development</div>
        <div className="pt-2">
          The Net Ninja (various playlists){" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faYoutube} />
        </div>
        <div className="pt-2">
          Full Stack Open 2022{" "}
          <FontAwesomeIcon className="ml-1 text-lg" icon={faLandmark} />
        </div>
      </div>
      <div className="text-lg font-semibold text-center pt-4">
        Happy learning! :)
      </div>
    </div>
  );
};

export default Resources;
