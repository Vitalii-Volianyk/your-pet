import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserAvatar,
  deleteUsersAvatar,
} from './auth-operations';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    birthday: null,
    phone: null,
    city: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isRefreshing = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [register.rejected](state) {
      state.isRefreshing = true;
    },
    [logIn.pending](state) {
      state.isRefreshing = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.rejected](state) {
      state.isRefreshing = true;
    },
    [logOut.fulfilled](state) {
      state.user = {
        id: null,
        name: null,
        email: null,
        birthday: null,
        phone: null,
        city: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateUserAvatar.fulfilled](state, action) {
      state.user = action.payload.user;
    },
    [deleteUsersAvatar.fulfilled](state, action) {
      state.user = action.payload.user;
    },
  },
});

export const authReducer = authSlice.reducer;
