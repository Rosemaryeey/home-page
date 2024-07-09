

import React, { useState, useEffect } from "react";

const ScrollAnimatedBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveDistance = (scrollPosition % window.innerWidth) - 50;

  return (
    <div div className=" relative w-[100%] h-[90vh] bg-[#f32c46] overflow-hidden  ">
      <div className=" bottom-12 w-full h-[32vh]  overflow-hidden ">
        <div
          className="absolute top-0 w-[100%] h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[20vh] bg-white"></div>
        </div>
      </div>

      <div className="relative bottom-12 w-full h-[40vh] overflow-hidden">
        <div
          className="absolute top-0 w-[100%] h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[40vh] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedBox;
