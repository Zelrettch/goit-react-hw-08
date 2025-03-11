import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import toast from "react-hot-toast";
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

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

export const selectContacts = (s) => s.contacts.items;
export const selectLoading = (s) => s.contacts.loading;
export const selectError = (s) => s.contacts.error;
export const selectFilteredContact = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    return items.filter((e) => e.name.toLowerCase().includes(filter));
  }
);
