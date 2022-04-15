const ScrollIndicator = () => {
  return (
    // add z-index and fixed position to sit above content and stay at top of page
    // gradient background color
    <div className="h-2 z-10 fixed w-screen bg-gradient-to-r from-sky-500 to-indigo-500"></div>
  );
};

export default ScrollIndicator;
