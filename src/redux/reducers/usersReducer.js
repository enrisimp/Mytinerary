import { createReducer } from "@reduxjs/toolkit";
import {
  signUp,
  signIn,
  signInWithToken,
  logout,
} from "../actions/userActions.js";
const initialState = {
  user: null,
  token: null,
};
export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(signUp.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(signIn.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(signInWithToken.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(logout, (stateActual, action) => {
      return {
        ...stateActual,
        user: null,
        token: null,
      };
    })
);
