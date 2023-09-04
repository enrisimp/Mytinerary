import { createReducer } from "@reduxjs/toolkit";
import {
  getCities,
  filterCities,
  getCitiesAsync,
  getCityAsync,
  resetCity
} from "../actions/citiesActions";


const initialState = {
  allCities: [],
  filteredCities: [],
  city: {},
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
    .addCase(filterCities, (stateActual, action) => {
      const inputValue = action.payload.inputValue;
      if (inputValue) {
        const filteredSearch = stateActual.allCities.filter((city) =>
          city.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        return {
          ...stateActual,
          filteredCities: filteredSearch,
        };
      } else {
        return {
          ...stateActual,
          filteredCities: stateActual.allCities,
        };
      }
    })
    .addCase(getCitiesAsync.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    })

    // .addCase(getCityAsync.fulfilled, (stateActual, action) => {
    //   const cityData = action.payload; // Access the city data from the action payload

    //   return {
    //     ...stateActual,
    //     city: cityData, // Update the 'city' property in your state
    //   };
    // })

    .addCase(getCityAsync.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        city: action.payload,
      };
    })
    
    .addCase(resetCity, (stateActual, action) => {
      return {
        ...stateActual,
        city: action.payload,
      };
    })
);


