import { useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // fires on user scroll
  window.onscroll = () => {
    const viewHeight = document.body.clientHeight - window.innerHeight;

    viewHeight == 0
      ? setScrollPercent(0)
      : setScrollPercent(
          (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
            100
        );
  };

  return (
    // add z-index and fixed position to sit above content and stay at top of page
    // gradient background color
    <div
      className="scrollBar h-2 z-10 fixed bg-gradient-to-r from-sky-500 to-indigo-500"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
};

export default ScrollProgress;
