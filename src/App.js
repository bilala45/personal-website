import ScrollProgress from "./components/ScrollProgress";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-screen bg-[#edf6f9]">
      <ScrollProgress />
      <Content />
      <Footer />
    </div>
  );
};

export default App;

// const Content = () => {
//   return (
//     <>
//       <ScrollProgress />
//       {/* wraps content with max width and adds padding */}
//       <div className="max-w-screen-md mx-auto px-8">
//         {/* wraps main content of site to be full height of screen */}
//         <div className="h-screen grid place-content-center">
//           <MainInfo />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };
