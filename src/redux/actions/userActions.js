import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const signUp = createAsyncThunk("create_user", async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/signup",
      body
    );
    localStorage.setItem("token", response.data.token);

      if (response.data.success) {
        return response.data; // Continue with success
      } else {
        const realErrors = response.data.errors;
        const firstError = realErrors[0].message; // Get the first error message
      realErrors.forEach((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
        throw new Error(firstError); // Throw an error with the first error message
      }
    } catch (error) {
      // Handle network or other errors
      const errorMessage = error.response.data.error || "An error occurred";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("signUp Error:", error.response.data.error);

    }
  }
);

export const signIn = createAsyncThunk("login", async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/signin",
      body
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log("signIn:", error);
  }
});

export const signInWithToken = createAsyncThunk("login_token", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8000/api/auth/signin/token",
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return {
      user: response.data.user,
      token: token,
    };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      // Log the user out and redirect to the login page
      const dispatch = useDispatch();
      dispatch(logout());
      Navigate("/signin"); // Redirect to the login page
    }
    console.error("SignInWithToken Error:", error);
    throw error; // Rethrow the error so it can be caught by the component
  }
});

export const logout = createAction("logout", () => {
  localStorage.removeItem("token");
  toast("See you soon!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return {
    payload: null,
  };
});
