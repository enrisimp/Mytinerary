import React, { useEffect, useState, useRef } from "react";
import CardCity from "../components/CardCity";
import { getAllCities } from "../services/cityService.jsx";

const Cities = () => {
  const [data, setData] = useState([]);
  const inputBusqueda = useRef(null);

  useEffect(() => {
    getAllCities()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.log("Error fetching initial data:", error);
      });
  }, []);

  const handleInput = () => {
    const search = inputBusqueda.current.value;
    let query = `?`;
    if (search) {
      query += "city=" + search;
    }
    getAllCities(query)
      .then((filteredData) => {
        setData(filteredData);
      })
      .catch((error) => {
        console.log("Error fetching filtered data:", error);
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400 shadow-md">
        Cities
      </h2>
      <div className="mb-4">
        <div className="mb-3">
          <label className="form-label text-2xl md:text-4xl mb-4 text-yellow-400 shadow-md">
            Search Cities
          </label>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name..."
          onInput={handleInput}
          ref={inputBusqueda}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {data.length === 0 && (
          <p className="col-span-full text-center">No cities found.</p>
        )}
        {data.map((item) => (
          <CardCity key={item._id} city={item} />
        ))}
      </div>
    </div>
  );
};

export default Cities;