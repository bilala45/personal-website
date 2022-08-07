import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJava, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Projects = () => (
  <div className="text-md">
    {/* Start of project one */}
    <div className="text-lg font-semibold">
      Git-lite{" "}
      <span className="px-1.5 py-0.5 mr-1 ml-2 rounded-md bg-green-300 text-sm font-normal">
        <FontAwesomeIcon className="mr-0.5" icon={faJava} /> Java
      </span>
    </div>
    <div className="pt-3">
      A command-line app that mimics the local features of Git, including
      committing, merging, amending and branching.
    </div>
    <div className="pt-3">
      <FontAwesomeIcon icon={faCode} />
      <a href="https://github.com/bilala45/git-lite">
        <span className="ml-2 font-medium text-indigo-500 hover:underline decoration-4 underline-offset-2">
          Code
        </span>
      </a>
    </div>

    {/* Start of project two */}
    <div className="pt-8">
      <div className="text-lg font-semibold">
        Amplify{" "}
        <span className="px-1.5 py-0.5 mr-1 ml-2 rounded-md bg-red-300 text-sm font-normal">
          <FontAwesomeIcon className="mr-1" icon={faReact} />
          React
        </span>
        <span className="px-1.5 py-0.5 mx-1 rounded-md bg-blue-300 text-sm font-normal">
          <FontAwesomeIcon className="mr-1.5" icon={faNodeJs} />
          Node.js
        </span>
      </div>
      <div className="pt-3">
        A web app that analyzes a user's music listening history and recommends
        songs from the discography of an artist queried by the user.
      </div>
      <div className="pt-3">
        <span className="mr-6">
          <FontAwesomeIcon icon={faCode} />
          <a href="https://github.com/bilala45/git-lite">
            <span className="ml-2 font-medium text-indigo-500 hover:underline decoration-4 underline-offset-2">
              Code
            </span>
          </a>
        </span>

        <span>
          <FontAwesomeIcon icon={faDisplay} />
          <a href="https://github.com/bilala45/git-lite">
            <span className="ml-2 font-medium text-indigo-500 hover:underline decoration-4 underline-offset-2">
              Demo
            </span>
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Projects;
