import Contact from "./Contact";

const MainInfo = () => {
  return (
    // wrapper inherits parent height (screen height)
    // content centered on screen
    <div className="grid h-full place-content-center">
      <h1 className="text-6xl">Hi, I'm Bilal!</h1>
      <h2 className="text-3xl">computer science student @ UPenn</h2>
      {/* contact links */}
      <Contact />
    </div>
  );
};

export default MainInfo;
