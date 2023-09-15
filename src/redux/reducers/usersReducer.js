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
  isOnline: false,
};
export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(signUp.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload.user,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(signIn.fulfilled, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload.user,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(signInWithToken.fulfilled, (stateActual, action) => {
      if (action.payload.user) {
        return {
          ...stateActual,
          user: action.payload.user,
          token: action.payload.token,
          isOnline: true,
        };
      } else {
        return stateActual; // Keep the state unchanged if user is undefined
      }
    })
    .addCase(logout, (stateActual, action) => {
      return {
        ...stateActual,
        user: null,
        token: null,
        isOnline: false,
      };
    })
);
