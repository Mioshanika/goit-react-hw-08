import { createAsyncThunk } from '@reduxjs/toolkit';
import { phoneBookAPI } from '../auth/operations';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (signal, thunkAPI) => {
  try {
    const response = await phoneBookAPI.get('/contacts', { signal });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await phoneBookAPI.post('/contacts', contact);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id }, thunkAPI) => {
    try {
      const response = await phoneBookAPI.delete(`/contacts/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
