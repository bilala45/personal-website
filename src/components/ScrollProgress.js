const ScrollProgress = () => {
  return (
    // add z-index and fixed position to sit above content and stay at top of page
    // gradient background color
    <div className="h-2 z-20 fixed w-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="h-2 w-5 bg-black"></div>
    </div>
  );
};

export default ScrollProgress;
