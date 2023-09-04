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
      const petition = await axios.get("http://localhost:4000/api/cities");
      return petition.data.response;
    } catch (error) {
      return [];
    }
  }
);

export const getCityAsync = createAsyncThunk(
  "get_city_async",
  async (id) => {
    try {
      const petition = await axios.get(
        "http://localhost:4000/api/cities/" + id
      );
      return petition.data.response;
    } catch (error) {}
  }
);

export const filterCities = createAction(
  "filter_cities",
  (category, search) => {
    return {
      payload: {
        selectedCategory: category,
        inputValue: search,
      },
    };
  }
);
