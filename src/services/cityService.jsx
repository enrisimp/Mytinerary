import axios from "axios";

const citiesQueries = axios.create({
  baseURL: "http://localhost:8000/api/cities",
 // baseURL: "./datatest.jsx",
});

export const getAllCities = async (queryParams = "") => {
  try {
    const response = await citiesQueries.get(queryParams);
    return response.data.response;
  } catch (error) {
    return [];
  }
};
