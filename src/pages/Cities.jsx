import React from "react";
import { useParams } from "react-router-dom";

/**
 * Renders a div element with a background image.
 * @returns {JSX.Element} The rendered div element.
 */
const Cities = () => {
  // const params = useParams();
  // console.log(params);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("../../public/work-in-progress-website-hd-png.png")',
      }}
    ></div>
  );
};

export default Cities;
