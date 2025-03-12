import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/swagger-api";
import { setToken, clearToken } from "../../api/swagger-api";

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
    clearToken();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue("Unauthorized");

    setToken(token);
    try {
      const { data } = await api.get("/users/current");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
