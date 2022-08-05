import ScrollProgress from "./components/ScrollProgress";
import Content from "./components/Content";
import Intro from "./components/Intro";

const App = () => (
  // comment out footer for now and add it back in at the end
  // Wrap content and footer in a div to restrict the max screen size
  <body className="w-screen min-h-screen bg-[#edf6f9]">
    <ScrollProgress />
    <div className="max-w-screen-lg mx-auto pt-32">
      <Intro />
      <Content />
    </div>
  </body>
);

export default App;
