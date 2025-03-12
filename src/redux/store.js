import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/slice";
import contactsSlice from "./contacts/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filtersSlice,
    auth: authReducer,
  },
});
