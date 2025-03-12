import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { register, login, logout, refreshUser } from "./operations";

function showError(state, action) {
  const e = action.payload;
  let message;
  if (e.status === 400) message = e.response.data.message ?? "Invalid data";
  else message = e.message;
  toast.error(message);
}

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.rejected, showError);
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });

    builder.addCase(login.rejected, showError);
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });

    builder.addCase(logout.rejected, showError);
    builder.addCase(logout.fulfilled, () => initialState);

    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
  },
});

export default slice.reducer;
