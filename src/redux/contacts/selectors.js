import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (s) => s.contacts.items;
export const selectLoading = (s) => s.contacts.loading;
export const selectError = (s) => s.contacts.error;
export const selectFilteredContact = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    return items.filter((e) => e.name.toLowerCase().includes(filter));
  }
);
