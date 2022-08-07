import ScrollProgress from "./components/ScrollProgress";
import Content from "./components/Content";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

const App = () => {
  // Wrap content and footer in a div to restrict the max screen size
  return (
    <div className="w-screen min-h-screen bg-[#edf6f9]">
      <ScrollProgress />
      <div className="max-w-screen-md mx-auto">
        <div className="py-28">
          <Intro />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
