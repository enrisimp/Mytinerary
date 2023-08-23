import React from "react";
import { Link } from "react-router-dom";

const CardCity = ({ city }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <img
        className="w-full h-48 object-cover"
        src={city.photo}
        alt={city.city}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold bg-gray-200 p-2 rounded-md">
          City: {city.city}
          <br />
          Country: {city.country}
        </h2>
      </div>
      <div className="mt-4">
        <Link
          className="text-xl font-semibold bg-blue-900 text-white p-2 rounded-md w-full inline-block transition duration-300 ease-in-out hover:bg-blue-800"
          to={`/cities/${city._id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardCity;
