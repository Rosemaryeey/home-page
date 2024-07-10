

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
  // window.innerWidth

  const moveDistance = (scrollPosition % 1000) - 600 ;

  return (
    <div
      div
      className=" relative flex flex-col-reverse w-[100%] md:h-[140vh] h-[105vh] overflow-hidden  "
    >
      <div className="relative bottom-12 w-full h-[80vh]  overflow-hidden bg-[rgb(243,44,70)]">
        <div
          className="absolute md:bottom-50 bottom-20  w-[200vw] h-[40vh] flex items-center justify-around"
          style={{ transform: `translateX(${moveDistance}px)` }}
        >
          <div className="w-[200vw] flex justify-around h-[40vh] items-center ">
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Team} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
          
          </div>
        </div>
      </div>
      <div className=" bottom-12 w-full h-[50vh]  overflow-hidden  bg-[rgb(243,44,70)]">
        <div
          className="absolute md:top-40 top-20 w-[250vw] h-[30vh] flex items-center justify-around "
          style={{ transform: `translateX(${-moveDistance}px)` }}
        >
          <div className="w-[250vw] flex justify-around h-[30vh] items-center">
            <img src={About} alt="" className="w-[30vw] " />
            <img src={Team} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={Shop} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
            <img src={About} alt="" className="w-[30vw]" />
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
