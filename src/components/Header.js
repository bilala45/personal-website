import ContactBar from "./ContactBar";

const Header = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div className="px-5 pb-20 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold">Bilal Ali</h1>
      <h2 className="text-xl md:text-xl mt-5 tracking-wide font-light ">
        computer science @ upenn
      </h2>
      <ContactBar />
    </div>
  );
};

export default Header;
