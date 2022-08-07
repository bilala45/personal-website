import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDisplay } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJava,
  faNodeJs,
  faSpotify,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import TechIcon from "./TechIcon";
import ProjectLink from "./ProjectLink";

const Projects = () => (
  <div className="text-md">
    {/* Start of project */}
    <div>
      <div className="text-lg font-semibold">
        Git-lite
        <span className="ml-2">
          <TechIcon name="Java" icon={faJava} />
          <TechIcon name="Git" icon={faGitAlt} />
        </span>
      </div>
      <div className="pt-3">
        A command-line app that mimics the local features of Git, including
        committing, merging, amending and branching.
      </div>
      <div className="pt-3">
        <ProjectLink
          icon={faCode}
          link="https://github.com/bilala45/git-lite"
          name="Code"
        />
      </div>
    </div>

    {/* Start of project */}
    <div className="pt-8">
      <div className="text-lg font-semibold">
        Amplify
        <span className="ml-2">
          <TechIcon name="React" icon={faReact} />
          <TechIcon name="Node.js" icon={faNode} />
          <TechIcon name="Express.js" icon={faNodeJs} />
          <TechIcon name="Spotify API" icon={faSpotify} />
        </span>
      </div>
      <div className="pt-3">
        A web app that analyzes a user's music listening history and recommends
        songs from the discography of an artist queried by the user.
      </div>
      <div className="pt-3">
        <ProjectLink
          icon={faCode}
          link="https://github.com/bilala45/git-lite"
          name="Code"
        />
        <ProjectLink
          icon={faDisplay}
          link="https://github.com/bilala45/git-lite"
          name="Demo"
        />
      </div>
    </div>
  </div>
);

export default Projects;
