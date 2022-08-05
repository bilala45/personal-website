import Contact from "./Contact";

const Intro = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div>
      <h1 className="text-5xl tracking-wide font-semibold antialiased">
        {/* emoji for waving hand and hand color included */}
        <span>Hey, I'm Bilal! &#128075;&#127997;</span>
      </h1>
      <h2 className="text-2xl pt-6 tracking-wide font-light">
        computer science student @ upenn
      </h2>

      <div className="flex justify-center">
        {/* contact links */}
        <Contact />
      </div>
    </div>
  );
};

export default Intro;
