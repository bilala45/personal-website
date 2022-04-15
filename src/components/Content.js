import MainInfo from "./MainInfo";
import Footer from "./Footer";

const Content = () => {
  return (
    <>
      {/* wraps content with max width and adds padding */}
      <div className="max-w-screen-md mx-auto px-8">
        {/* wraps main content of site to be full height of screen */}
        <div className="h-screen">
          <MainInfo />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;