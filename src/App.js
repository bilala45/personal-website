import ScrollProgress from "./components/utils/ScrollProgress";
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  // Wrap content and footer in a div to restrict the max screen size
  return (
    <div className="w-screen min-h-screen bg-sky-50">
      <ScrollProgress />
      <div className="max-w-screen-md mx-auto">
        <div className="py-28">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;

// bg-[#edf6f9]
