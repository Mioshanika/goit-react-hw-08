import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectFilter } from './filtersSlice';

// External reducers handlers
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};
const addContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};
const deleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
};
// State
const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
// Slice
const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});
export const contactsReducer = slice.reducer;
// Selectors
export const selectContacts = state => state.contacts.contacts;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.includes(filter)
    )
);
