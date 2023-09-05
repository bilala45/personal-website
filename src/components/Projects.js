import { FaGitAlt, FaJava, FaNodeJs, FaReact, FaSpotify } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import ProjectLink from "./utils/ProjectLink";

const Projects = () => (
  <div className="text-md">
    <div className="md:hidden font-semibold text-2xl text-sky-600 mt-20">
      Projects
    </div>

    {/* Start of project */}
    <div className="pt-5 md:pt-0">
      <div className="text-lg font-semibold">
        Amplify
        <span className="flex flex-wrap sm:pt-3 pt-1 text-black text-sm font-normal">
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <FaReact className="mr-1" />
            React
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <FaNodeJs className="mr-1" />
            Node.js
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <SiExpress className="mr-1" />
            Express.js
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <FaSpotify className="mr-1" />
            Spotify Web API
          </span>
          {/* <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <SiTailwindcss className="mr-1" />
            Tailwind CSS
          </span> */}
        </span>
      </div>
      <div className="pt-3">
        Web application that analyzes a user's top played songs to generate
        artist-specific song recommendations.
      </div>
      <div className="pt-3">
        <ProjectLink
          link="https://github.com/bilala45/artist-recommender"
          name="Code"
        />
        {/* <ProjectLink
          icon={faDisplay}
          link="https://github.com/bilala45/git-lite"
          name="Demo"
        /> */}
      </div>
    </div>

    {/* Start of project */}
    <div className="pt-8">
      <div className="text-lg font-semibold">
        Git-learner
        <span className="flex pt-3 text-black text-sm font-normal">
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300">
            <FaJava className="mr-1" />
            Java
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300">
            <FaGitAlt className="mr-1" />
            Git
          </span>
        </span>
      </div>
      <div className="pt-3">
        A command-line app that wraps Git, designed to make Git more
        appraochable to new developers by providing explanations and
        visualizations of commands.
      </div>
      {/* <div className="pt-3">
        <ProjectLink link="https://github.com/bilala45/git-lite" name="Code" />
      </div> */}
    </div>

    {/* Start of project */}
    <div className="pt-8">
      <div className="text-lg font-semibold">
        Snippet
        <span className="flex flex-wrap sm:pt-3 pt-1 text-black text-sm font-normal">
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <FaReact className="mr-1" />
            Python
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <FaNodeJs className="mr-1" />
            Flask
          </span>
          <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
            <SiExpress className="mr-1" />
            React
          </span>
        </span>
      </div>
      <div className="pt-3">
        A real-time web application that analyzes a user's top played songs to
        generate artist-specific song recommendations.
      </div>
      <div className="pt-3">
        <ProjectLink
          link="https://github.com/bilala45/artist-recommender"
          name="Code"
        />
        {/* <ProjectLink
          icon={faDisplay}
          link="https://github.com/bilala45/git-lite"
          name="Demo"
        /> */}
      </div>
    </div>
  </div>
);

export default Projects;
