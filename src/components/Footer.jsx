import React from "react";

/**
 * Renders the footer section of the website.
 * @returns {JSX.Element} The rendered footer section.
 */
const Footer = () => {
  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12 text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">About</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Contact us</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Terms of Service</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Privacy Policy</p>
        </div>
       
        <div className="flex items-center mt-6">
          <p className="text-base leading-4">
            2023 <span className="font-semibold">MyTinerary</span>
          </p>
          <div className="border-l border-white pl-2 ml-2">
            <p className="text-base leading-4">Enrique Escalante</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;