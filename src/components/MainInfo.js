import Contact from "./Contact";

const MainInfo = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div>
      <h1 className="text-5xl tracking-wide font-semibold">
        {/* emoji for waving hand and hand color included */}
        <span className="hover:text-[#00bad6]">
          Hey, I'm Bilal! &#128075;&#127996;
        </span>
      </h1>
      <h2 className="text-2xl pt-6 tracking-wide font-light">
        computer science student @ upenn
      </h2>
      {/* contact links */}
      <Contact />
    </div>
  );
};

export default MainInfo;
