import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducer.js";
import { itinerariesReducer } from "./reducers/itinerariesReducer.js";
import { userReducer } from "./reducers/usersReducer.js";
export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    user : userReducer
  },
});
