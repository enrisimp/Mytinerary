import React from "react";
import { Link } from "react-router-dom";

const CardItinerary = ({ itinerary }) => {
  return (
    <div className="card col-10 col-md-6 col-xl-3">
      {" "}
      <h2 className="card-title p-2"> {itinerary.itinerary} </h2>{" "}
      <h3 className="card-text p-2"> {itinerary.description} </h3>
      <Link to={"/itineraries/" + itinerary._id}> Details </Link>
    </div>
  );
};

export default CardItinerary;
