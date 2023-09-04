import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItinerarys = createAsyncThunk(
  "get_cagategorias",
  async () => {
    const peticion = await axios("http://localhost:4000/api/categories");
    return peticion.data;
  }
);

export const getItinerary = createAsyncThunk(
  "get_categoria",
  async (id) => {
    const peticion = await axios("http://localhost:4000/api/categories/" + id);
    return peticion.data.category;
  }
);

export const resetItinerary = createAction("reset_category", () => {
  return {
    payload: {},
  };
});
