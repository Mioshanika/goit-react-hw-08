import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const phoneBookAPI = axios.create({ baseURL: 'https://connections-api.goit.global' });
// Utility to add JWT
const setAuthHeader = token => {
  phoneBookAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = () => {
  delete phoneBookAPI.defaults.headers.common.Authorization;
};
// Auth thunks
export const register = createAsyncThunk('auth/register', async (userInfo, thunkAPI) => {
  try {
    const response = await phoneBookAPI.post('/users/signup', userInfo);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const login = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
  try {
    const response = await phoneBookAPI.post('/users/login', userInfo);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await phoneBookAPI.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue('No one is logged in');
    }
    setAuthHeader(savedToken);
    const response = await phoneBookAPI.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
