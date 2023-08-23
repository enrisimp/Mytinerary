import React from "react";
import { Link } from "react-router-dom";

const CardCity = ({ city }) => {
  return (
    <div className="card col-10 col-md-5 col-xl-3">
      <img
        className="card-img-top h-75
      "
        src={city.photo}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title">{city.city}</h2>
      </div>
      <div className="d-flex justify-end px-1 py-1">
        <Link className="btn btn-secondary" to={`/cities/${city._id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardCity;

