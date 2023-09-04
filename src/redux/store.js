import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducer.js";
import { itinerariesReducer } from "./reducers/itinerariesReducer.js";
export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
  },
});
