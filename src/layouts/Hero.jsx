import React from "react";

/**
 * Renders a hero section with a title, description, and optional children components.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered inside the hero section.
 * @returns {JSX.Element} - The rendered hero section.
 */
const Hero = ({ children }) => {
  return (
    <main>
      <div className="dark:bg-gray-900">
        <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
          {/* Text section */}
          <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-50 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex flex-col lg:flex-row items-center justify-center">
            <div className="text-center">
              <h1 className="dark:text-white w-full sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                MyTinerary
              </h1>
              <p className="dark:text-gray-300 md:w-11/12 lg:w-11/12 xl:w-11/12  text-base lg:text-lg leading-normal text-gray-600 mt-5 px-4 lg:pr-8">
                Find your perfect trip, designed by insiders who know and love
                their cities
              </p>
              {/* Render child components */}
              {children}
            </div>
          </div>
          {/* Image section */}
          <div className="z-30 relative lg:w-1/2 flex justify-center items-center">
            {/* Large screen image */}
            <div className="hidden lg:bg-opacity-50 w-full lg:w-10/12 lg:h-full lg:flex justify-center items-center">
              <div className="w-2/3 lg:w-auto">
                <div className="flex justify-center items-center">
                  <img
                    src="./LogoRound.png"
                    alt="image with decent chairs"
                    className="w-full relative z-30 lg:pl-20 px-6 py-14"
                  />
                </div>
              </div>
            </div>
            {/* Small screen image */}
            <div className="w-full h-full lg:hidden flex justify-center items-center">
              <img
                src="./LogoRound.png"
                className="w-1/2 relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
