

import React, { useState, useEffect } from "react";
import About from "../assets/about.png"
import Shop from "../assets/shop.png";
import Team from "../assets/team.png";
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
    <div
      div
      className=" relative flex flex-col-reverse w-[100%] h-[130vh] overflow-hidden  "
    >
      <div className="relative bottom-12 w-full h-[80vh] overflow-hidden bg-[rgb(243,44,70)]">
        <div
          className="absolute bottom-30 w-full h-[40vh] flex items-center pb-20 justify-around border-2"
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[40vh] bg-blue-500"></div>
        </div>
      </div>
      <div className=" bottom-12 w-full h-[50vh]  overflow-hidden  bg-[rgb(243,44,70)]">
        <div
          className="absolute top-40 w-full h-[30vh] flex items-center justify-around"
          style={{ transform: `translateX(${moveDistance}px)` }}
        >
          <div className="w-[90vw] flex justify-around h-[40vh]">
            <img src={About} alt="" />
            <img src={Team} alt="" />
            <img src={About} alt="" />
            <img src={Shop} alt="" />
          </div>
        </div>
      </div>

      <div className="relative bottom-12 w-full h-[50vh] overflow-hidden">
        <div
          className="absolute bottom-10 w-[100%] h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[20vw] h-[40vh] "></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedBox;
