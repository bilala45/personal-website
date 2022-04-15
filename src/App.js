import Content from "./components/Content";

const App = () => {
  // base page of app
  // wrapping content in div allows you to change background color of site
  return (
    <div className="w-screen h-screen bg-[#edf6f9]">
      <Content />
    </div>
  );
};

export default App;
