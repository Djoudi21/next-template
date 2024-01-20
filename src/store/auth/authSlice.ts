import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const initialState = {
  user: {
    name: "name",
    email: "user.email@gmail.com",
    id: 0,
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "authqsdf",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const selectUser = (state: RootState) => {
  return state.auth.user;
};
