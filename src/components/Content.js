import Nav from "./Nav";
import Main from "./Main";

const Content = () => (
  // set up a grid with 3 columns to split content
  // Nav occupies 1/3 of grid, Main occupies 2/3
  <div className="grid grid-cols-4">
    <div className="col-span-1 mr-10 border-r-2">
      <Nav />
    </div>
    <div className="col-span-3 py-3.5">
      <Main />
    </div>
  </div>
);

export default Content;
