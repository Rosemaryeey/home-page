
import React from 'react'
import Polo from "../assets/polo.png";
import Polo2 from "../assets/polo2.png";
import Polo3 from "../assets/polo3.png";
import Polo4 from "../assets/polo4.png";


function Shop() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-around">
        <div className="w-full h-[90vh] flex items-center bg-[url('./assets/bg3.jpeg')] bg-cover bg-center justify-start  ">
          <div className="w-[90vw] md:w-[70vw] lg:w-[55vw] h-auto flex flex-col  text-justify items-start justify-end py-6  pt-[25vh] pl-14 ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-5 text-white">
              SPONSORS
            </h1>
            <p className="md:text-2xl text-sm text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
              odio vestibulum nunc, neque integer purus.
            </p>
          </div>
        </div>

        <section className="py-16 border-2 w-[95vw] flex items-center justify-center">
          <div className="container mx-auto text-center border-gray-400 border-2">
            <h2 className="text-4xl font-bold mb-12 border-2">LATEST MERCH</h2>
            <div className="flex flex-wrap justify-center items-center  border-2  ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  Black Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className=" text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  White Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo3}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo4}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center  pt-10 border-2  ">
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo}
                  alt="Esports Team Shirt"
                  className=" sh w-full h-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  Black Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo2}
                  alt="Esports Team Shirt"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className=" text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM SHIRT <br />
                  White Line <br />
                  <span className="tw">$19.99 USD</span>
                </h3>
              </div>
              <div className=" sh  rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo3}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
              <div className=" sh rounded-lg shadow-lg max-w-[18rem] mx-3">
                <img
                  src={Polo4}
                  alt="Esports Team Hoodie"
                  className="w-full h-auto mb-4 sh"
                />
                <h3 className="text-xl font-bold mb-2 text-center">
                  ESPORTS TEAM HOOIE <br />
                  white Line <br />
                  <span className="tw">$59.99 USD</span>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shop