import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk(
  "get_itineraries",
  async () => {
    const petition = await axios("http://localhost:8000/api/itineraries");
    return petition.data;
  }
);

export const getItinerary = createAsyncThunk(
  "get_itinerary",
  async (id) => {
    const petition = await axios("http://localhost:8000/api/itineraries/" + id);
    return petition.data.itinerary;
  }
);

export const resetItinerary = createAction("reset_itinerary", () => {
  return {
    payload: {},
  };
});
