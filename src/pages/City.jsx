import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCityAsync } from "../redux/actions/citiesActions";
import Itinerary from "../components/Itinerary";
// Import the placeholder image
import lostImage from "/lost.png";

const City = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);


  useEffect(() => {
    dispatch(getCityAsync(id));
  }, [dispatch, id]);

  const handleClick = () => {
    navigate("/cities");
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400 shadow-md">
        City
      </h2>
      <div className="w-full max-w-4xl p-4 m-4 rounded-lg shadow-md overflow-hidden">
        {city ? (
          <>
            <div className="border border-gray-300 p-4 rounded-lg">
              <img
                className="w-full h-48 object-cover"
                src={city.photo}
                alt={city.city}
              />
              <div className="mt-4">
                <h1 className="text-xl font-semibold bg-gray-200 p-2 rounded-md">
                  City: {city.city}
                </h1>
                <br />
                <h2 className="font-semibold  text-yellow-400">
                  Country: {city.country}
                </h2>
                <p className="text-yellow-400">
                  <span className="font-semibold  text-yellow-400">
                    Foundation:
                  </span>{" "}
                  {city.foundation}
                </p>
                <p className="text-yellow-400">
                  <span className="font-semibold  text-yellow-400">
                    Population:
                  </span>{" "}
                  {city.population}
                </p>
                <p className="text-yellow-400">
                  <span className="font-semibold  text-yellow-400">
                    Description:
                  </span>{" "}
                  {city.description}
                </p>
                <p className="text-yellow-400">
                  <span className="font-semibold  text-yellow-400">
                    Small Description:
                  </span>{" "}
                  {city.smalldescription}
                </p>
                <p className="text-yellow-400">
                  <span className="font-semibold  text-yellow-400">
                    Featured Location:
                  </span>{" "}
                  {city.featuredLocation}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2>No City</h2>
          </div>
        )}
        {city && city.itineraries && city.itineraries.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Itineraries</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {city.itineraries.map((itinerary) => (
                <Itinerary key={itinerary._id} itinerary={itinerary} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <img
              src={lostImage} // Use the imported image
              alt="No itineraries available"
              className="mx-auto mb-2 max-w-xs sm:max-w-md" // Adjust max-w and classes
            />
            <h2 className="text-white text-xl font-semibold mb-2">
              No itineraries available for this city.
            </h2>
            <p className="text-white">
              Check back later or explore other cities.
            </p>
          </div>
        )}
      </div>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
      >
        Back to Cities
      </button>
    </div>
  );
};

export default City;
