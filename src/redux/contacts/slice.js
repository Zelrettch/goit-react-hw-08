import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import toast from "react-hot-toast";

function showError(state, action) {
  state.loading = false;
  state.error = action.payload;
  toast.error(action.payload);
}

function enableLoader(state) {
  state.loading = true;
}

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, enableLoader);
    builder.addCase(deleteContact.pending, enableLoader);
    builder.addCase(addContact.pending, enableLoader);

    builder.addCase(fetchContacts.rejected, showError);
    builder.addCase(deleteContact.rejected, showError);
    builder.addCase(addContact.rejected, showError);

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = state.items.filter((e) => e.id !== action.payload.id);
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    });
  },
});

export default slice.reducer;
