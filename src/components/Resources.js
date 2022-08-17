import ResourceClass from "./ResourceClass";
import ResourceBook from "./ResourceBook";
import ResourceVideo from "./ResourceVideo";

const Resources = () => {
  return (
    <div className="text-md">
      <div className="md:hidden font-semibold text-2xl text-sky-600 mt-20">
        Resources
      </div>
      <div className="pt-5 md:pt-0">
        There are many free online resources out there to help you learn
        computer science and math. Here are the ones I've enjoyed most!
      </div>
      <div>
        <div className="font-semibold pt-4">Programming and CS Basics</div>
        <ResourceBook
          name="Composing Programs"
          author="John Denero"
          link="https://composingprograms.com/"
        />

        <div className="font-semibold pt-4">Math</div>
        <ResourceVideo
          author="TrevTutor"
          name="Discrete Math 1"
          link="https://www.youtube.com/playlist?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz"
        />
        <ResourceVideo
          author="3Blue1Brown"
          name="Essence of Linear Algebra"
          link="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
        />

        <div className="font-semibold pt-4">Data Structures and Algorithms</div>
        <ResourceVideo
          author="William Fiset"
          name="various playlists"
          link="https://www.youtube.com/c/WilliamFiset-videos"
        />
        <ResourceVideo
          author="Abdul Bari"
          name="Algorithms"
          link="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
        />

        <div className="font-semibold pt-4">Web Development</div>
        <ResourceVideo
          author="The Net Ninja"
          name="various playlists"
          link="https://www.youtube.com/c/TheNetNinja"
        />
        <ResourceClass
          name="Full Stack Open 2022"
          link="https://fullstackopen.com/en/"
        />
      </div>
      <div className="font-semibold pt-5">Happy learning! :)</div>
    </div>
  );
};

export default Resources;
