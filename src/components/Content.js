import Navigation from "./Navigation";
import MainInfo from "./MainInfo";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const Content = () => {
  return (
    <>
      <ScrollProgress />
      {/* wraps content with max width and adds padding */}
      <div className="max-w-screen-md mx-auto px-8">
        {/* wraps main content of site to be full height of screen */}
        <div className="h-screen grid place-content-center">
          <MainInfo />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
