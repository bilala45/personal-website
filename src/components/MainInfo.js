import Contact from "./Contact";

const MainInfo = () => {
  return (
    // wrapper inherits parent height (screen height)
    // content centered on screen
    <div className="grid place-content-center">
      <h1 className="text-5xl tracking-wide font-semibold">
        <span className="hover:text-[#00bad6]">Hey, I'm Bilal!</span>
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
