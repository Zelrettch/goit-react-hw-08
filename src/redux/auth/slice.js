import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { register, login } from "./operations";

function showError(state, action) {
  const e = action.payload;
  const message = e.status === 400 ? "Invalid value" : e.message;
  toast.error(message);
}

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
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
  },
});

export default slice.reducer;
