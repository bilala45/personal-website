import Nav from "./Nav";
import Main from "./Main";

const Content = () => (
  // set up a grid with 3 columns to split content
  // Nav occupies 1/3 of grid, Main occupies 2/3
  <div className="grid grid-cols-4">
    <div className="col-span-1 mr-10 border-r-2 hidden md:block">
      <Nav />
    </div>
    <div className="col-span-4 md:col-span-3 py-0 md:pt-3.5 md:pb-4 px-5 md:pl-0 md:pr-4">
      <Main />
    </div>
  </div>
);

export default Content;
