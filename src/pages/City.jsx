import React from "react";
import { Link, useParams } from "react-router-dom";
// import DetailCard from "../components/DetailCard.jsx";

const City = () => {
    // const { cityId } = useParams(); // Get cityId from URL parameter
  // const city = cities.find(item => item._id === cityId);
    // if (!city) {
    // return <p>City not found</p>;
  return (
    <>
      <div>Details</div>
      <div className="card">

        <div className="card-body">
        <Link to="/cities" className="btn btn-secondary">
          Back to Cities
        </Link>

        </div>
      </div>
    </>
  );
};

export default City;