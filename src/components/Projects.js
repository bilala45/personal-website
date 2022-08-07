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
    <div className="md:hidden font-semibold text-2xl text-sky-600 mt-20">
      Projects
    </div>
    {/* Start of project */}
    <div className="pt-5 md:pt-0">
      <div className="text-lg font-semibold">
        Git-lite
        <span className="md:ml-3 block md:inline pt-2 md:pt-0">
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
        <span className="md:ml-3 block md:inline pt-2 md:pt-0">
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
