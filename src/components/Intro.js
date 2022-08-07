import Contact from "./Contact";

const Intro = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div className="text-center pb-20">
      <h1 className="text-5xl tracking-wider font-bold text-sky-600">
        Bilal Ali
      </h1>
      <h2 className="text-xl md:text-2xl pt-3 px-10 tracking-wide font-light">
        computer science student @ upenn
      </h2>
      <div className="flex justify-center">
        <Contact />
      </div>
    </div>
  );
};

export default Intro;
