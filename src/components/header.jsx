import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./header.css";
import { HiMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Header() {
  const [display, setDisplay] = useState(true);
  const [height, setHeight] = useState(true);
  const [menu, setMenu] = useState(true);
  const closeMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header
        className="md:h-[20vh] h-[15vh] w-[100%] one flex items-center  
      justify-center fixed z-50 text-white  "
      >
        <div className=" wow  w-[97vw]  ">
          <div className=" lo  p-3 ">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div
            className={`w-[100%] ${
              menu ? "h-0" : "h-screen"
            } bg-black top-[13%] fixed overflow-y-auto  z-50  `}
          >
            <nav
              // role="navigate"
              className=" nav   items-start h-[134vh]   "
            >
              <div className="h-[52vh] justify-between flex flex-col py-7 px-4  ">
                <Link className="a" to="/home">
                  HOME
                </Link>
                <Link className="a" to="/about">
                  ABOUT
                </Link>
                <Link className="a" to="/team">
                  TEAM
                </Link>
                <Link className="a" to="/partner">
                  PARTNER
                </Link>
                <Link className="a" to="/shop">
                  SHOP
                </Link>
                <Link
                  className="a flex justify-between items-center w-[24vw]"
                  to=""
                >
                  PAGES
                  <span
                    className="text-2xl"
                    onClick={() => {
                      setDisplay(!display);
                      setHeight(!height);
                    }}
                  >
                    {display ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </span>
                </Link>
              </div>
              <div className="flex px-4 ">
                <div className={` w-[50vw] ${height ? "h-[0]" : "h-[80vh]"}`}>
                  <div className="h-[33vh] flex flex-col gap-4">
                    <Link
                      onClick={closeMenu}
                      className="a text-sm  font-thin"
                      to="/home"
                    >
                      HOME
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-thin "
                      to="/about"
                    >
                      ABOUT
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to="/team"
                    >
                      TEAM
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight w-[49vw]"
                      to=""
                    >
                      TEAM INDIVIDUAL
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to=""
                    >
                      NEWS
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to=""
                    >
                      NEWS INDIVIDUAL
                    </Link>
                  </div>
                  <div className="flex flex-col gap-5 w-[63vw]">
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to="/about"
                    >
                      STYLE GUIDE
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to="/team"
                    >
                      404 NOT FOUND
                    </Link>

                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight w-[68vw]"
                      to=""
                    >
                      PASSWORD PROTECTED
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to=""
                    >
                      LICENSES
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a text-md  font-extralight"
                      to=""
                    >
                      CHANGELOG
                    </Link>
                    <Link
                      onClick={closeMenu}
                      className="a w-[68vw] text-md   font-extralight"
                      to=""
                    >
                      BROWSE MORE TEMPLATES
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link className="a text-md  font-extralight" to="">
                    SHOP
                  </Link>
                  <Link className="a text-md  font-extralight" to="">
                    SHOP CMS
                  </Link>
                  <Link className="a text-md  font-extralight" to="">
                    CONTACT
                  </Link>
                  <Link className="a text-md  font-extralight" to="">
                    SPONSORS
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className=" ok    ">
            <Link className=" font-bold  ">CART[0]</Link>
            <a href="" className="button btn-p md:flex hidden">
              {" "}
              BUY MERCH
            </a>

            <div
              onClick={closeMenu}
              className="button-primary menu bg-[#f32c46]  text-5xl"
            >
              <HiMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
