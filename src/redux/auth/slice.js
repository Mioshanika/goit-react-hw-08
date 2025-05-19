import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

// External reducers
const handleRegisteredOrLoggedIn = (state, action) => {
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isRefreshing = false;
};
const handleRejectedOrLoggedOut = state => {
  state.isLoggedIn = false;
  state.user = { name: null, email: null };
  state.token = null;
  state.isRefreshing = false;
};
const handleRefresh = (state, action) => {
  state.isLoggedIn = true;
  state.user = action.payload;
  state.isRefreshing = false;
}
const handlePending = state => {
  state.isRefreshing = true;
};
// State
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
};
// Slice
const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisteredOrLoggedIn)
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejectedOrLoggedOut)
      .addCase(login.fulfilled, handleRegisteredOrLoggedIn)
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejectedOrLoggedOut)
      .addCase(logout.fulfilled, handleRejectedOrLoggedOut)
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejectedOrLoggedOut)
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleRejectedOrLoggedOut);
  },
});
export const authReducer = slice.reducer;
