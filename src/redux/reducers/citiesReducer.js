import { createReducer } from "@reduxjs/toolkit";
import {
  getCities,
  filtrarCities,
  getCitiesAsync,
  getCityAsync,
} from "../actions/citiesActions";

const initialState = {
  allCities: [],
  filteredCities: [],
  categories: [],
  city: null,
};
export const citiesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCities, (stateActual, action) => {
      return {
        ...stateActual,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    })
    .addCase(filtrarCities, (stateActual, action) => {
      const filteredSearch = stateActual.allCities.filter((city) =>
        city.name.toLowerCase().includes(action.payload.inputValue)
      );
      let newFilteredCities = filteredSearch;
      if (action.payload.selectedCategory != "All") {
        newFilteredCities = newFilteredCities.filter(
          (city) => city.category.category == action.payload.selectedCategory
        );
      }
      return {
        ...stateActual,
        filteredCities: newFilteredCities,
      };
    })
    .addCase(getCitiesAsync.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    })
    .addCase(getCityAsync.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        city: action.payload,
      };
    })
);
