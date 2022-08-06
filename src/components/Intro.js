import Contact from "./Contact";

const Intro = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div className="text-center">
      <h1 className="text-6xl tracking-wider font-semibold antialiased">
        <span>Bilal Ali</span>
      </h1>
      <h2 className="text-2xl pt-6 tracking-wide font-normal">
        computer science student @ upenn
      </h2>
      <div className="flex justify-center">
        <Contact />
      </div>
    </div>
  );
};

export default Intro;
