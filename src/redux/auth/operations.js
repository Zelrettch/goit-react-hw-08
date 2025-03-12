import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

function setToken(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", user);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", user);
    setToken(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("/users/logout");
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
