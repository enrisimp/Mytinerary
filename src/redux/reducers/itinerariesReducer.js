import { createReducer } from "@reduxjs/toolkit";
import {
  getItineraries,
  getItinerary,
  resetItinerary,
} from "../actions/itinerariesActions";
const initialState = {
  itineraries: [],
  itinerary: {},
};
export const itinerariesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getItineraries.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        itineraries: action.payload,
      };
    })
    .addCase(getItinerary.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        itinerary: action.payload,
      };
    })
    .addCase(resetItinerary, (stateActual, action) => {
      return {
        ...stateActual,
        itinerary: action.payload,
      };
    })
);
