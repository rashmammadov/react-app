import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginInitial = { login: false };

const loginSlice = createSlice({
  name: "login",
  initialState: loginInitial,
  reducers: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    },
  },
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export const loginSliceActions = loginSlice.actions;

export default store;
