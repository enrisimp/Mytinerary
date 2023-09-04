import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import DetailCard from "../components/DetailCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getCityAsync } from "../redux/actions/citiesActions";

const City = () => {
    const navigate = useNavigate();

    /**
     * Handles the click event of the button and navigates to the '/cities' route.
     */
    const handleClick = () => {
      navigate("/cities");
  };

    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector((store) => store.cities.city);
  
    useEffect(() => {
      dispatch(getCityAsync(id));
    }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400 shadow-md">
        City
      </h2>
      <div className="card">
        <div className="card-body">
          <img
            src="/work.png" // Make sure the path is correct based on your project setup
            alt="City"
            className="mx-auto"
          />

          {city ? (
            <div>
              {" "}
              <h1> {city.name} </h1> <img src={city.image} />
            </div>
          ) : (
            <h2> No City </h2>
          )}
          {/* <Link to="/cities" className="btn btn-blue mt-4">
            Back to Cities
          </Link> */}

          <button
            onClick={handleClick}
            className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 w-full sm:w-auto mt-8 text-base text-center focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800"
          >
            Back to Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default City;