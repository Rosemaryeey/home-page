import React from "react";
import aboutImage from "../assets/bg3.jpeg" 


function About() {
  return (
    <div>
      <div className="font-barlow">
        {/* Hero Section */}
        <div
          className="w-full h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="text-center text-white px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Us
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
              Our Mission
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap -mx-6">
              <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <img
                    src="/path/to/image1.jpg"
                    alt="Image 1"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <img
                    src="/path/to/image2.jpg"
                    alt="Image 2"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    Our Team
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <img
                    src="/path/to/image3.jpg"
                    alt="Image 3"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    Our History
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
