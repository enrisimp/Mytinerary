import React from "react";

const DetailCard = ({ city }) => {
  return (
    <div className="card">
      <img src={city.photo} alt={city.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <p>city: {city.city}</p>
        <p>Country: {city.country}</p>
        <p>Foundation: {city.foundation}</p>
        <p>Population: {city.population}</p>
        <p>photo: {city.photo}</p>
        <p>description: {city.description}</p>
        <p>smalldescription: {city.smalldescription}</p>
        <p>featuredLocation: {city.featuredLocation}</p>
      </div>
    </div>
  );
};

export default DetailCard;
