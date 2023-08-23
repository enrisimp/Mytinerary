import React, { useEffect, useState, useRef } from "react";
import CardCity from "../components/CardCity";
import { getAllCities } from "../services/cityService.jsx";
// import axios from 'axios';

// const URL = 'http://localhost:8000/api/cities';

const Cities = () => {
  const [data, setData] = useState([]);

  const inputBusqueda = useRef(null);

  useEffect(() => {
    // console.log("Fetching initial data...");
    getAllCities()
      .then((responseData) => {
        // console.log("Initial data fetched:", responseData);
        setData(responseData);
      })
      .catch((error) => {
        console.log("Error fetching initial data:", error);
      });
  }, []);

  const handleInput = () => {
    const search = inputBusqueda.current.value;
    // console.log("Search input:", search);

    let query = `?`;
    if (search) {
      query += "city=" + search;
    }
    // console.log("Query:", query);

    getAllCities(query)
      .then((filteredData) => {
        // console.log("Filtered data:", filteredData);
        setData(filteredData);
      })
      .catch((error) => {
        console.log("Error fetching filtered data:", error);
      });
  };

return (
  <div>
    <h2 className="text-center mb-2">Cities</h2>
    <div className="d-flex flex-wrap gap-3 justify-center">
      <div className="col-10">
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Search Cities</label>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
            onInput={handleInput}
            ref={inputBusqueda}
          />
        </div>
      </div>
      {data.length === 0 && (
        <div className="col-10">
          <p className="text-center">No cities found.</p>
        </div>
      )}
      {data.map((item) => (
        <CardCity key={item._id} city={item} />
      ))}
    </div>
  </div>
);
};

export default Cities;