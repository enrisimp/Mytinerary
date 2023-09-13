import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
export const cargarUsuario = createAction('cargar_usuario', (user) => {
    return {
        payload: user
    }
})

export const signUp = createAsyncThunk('create_user', async ( body ) => {
    try {
        const response = axios.post('http://localhost:8000/api/auth/signup', body)
        // console.log(response)

        localStorage.setItem('token', response.data.token)
        // return response.data.user

        return response.data;
    }
    catch (error) {
        console.log(error)
    }
})

export const signIn = createAsyncThunk("login", async (body) => {
  try {
    const response = axios.post("http://localhost:8000/api/auth/signin", body);
        // console.log(response)

        localStorage.setItem('token', response.data.token)
        // return response.data.user
        
        return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const signInWithToken = createAsyncThunk("login_token", async () => {
  try {
    const token = localStorage.getItem("token");
    const response = axios.post(
        "http://localhost:8000/api/auth/signin/token", {}, {
            headers: {
              Authorization: "Bearer " + token
          }
      });
    // console.log(response)

    // return response.data.user

      return {
          user: response.data.user,
          token : token
      }
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAction('reset', () => {
    localStorage.removeItem('token');
    return {
        payload: null
    }
})