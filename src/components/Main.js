import About from "./About";

const Main = () => (
  <div className="pr-4">
    {/* intro and about occupy height of screen at minimum (if content is longer than screen height, then it'll expand past it) */}
    <About />
  </div>
);

export default Main;
