import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCities = createAction("get_cities", (cities) => {
  return {
    payload: cities,
  };
});

export const getCitiesAsync = createAsyncThunk(
  "get_cities_async",
  async () => {
    try {
      const petition = await axios.get("http://localhost:8000/api/cities");
      return petition.data.response;
    } catch (error) {
      return [];
    }
  }
);

// export const getCityAsync = createAsyncThunk("get_city_async", async (id) => {
//   try {
//     const petition = await axios.get("http://localhost:8000/api/cities/" + id);
//     console.log("API Response Data:", petition.data); // Log the entire API response.

//     const cityData = petition.data.response;
//     console.log("City Data:", cityData); // Log the extracted city data.

//     return cityData;
//   } catch (error) {
//     console.error("Error fetching city:", error); // Log any errors.
//     throw error; // Rethrow the error to indicate a failed API request.
//   }
// });


export const filterCities = createAction("filter_cities", (search) => {
  return {
    payload: {
      inputValue: search,
    },
  };
});


export const getCityAsync = createAsyncThunk("get_city", async (id) => {
  const petition = await axios("http://localhost:8000/api/cities/" + id);
  return petition.data;
});

export const resetCity = createAction("reset_city", () => {
  return {
    payload: {},
  };
});
