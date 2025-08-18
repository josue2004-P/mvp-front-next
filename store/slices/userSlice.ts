// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id?: number;
  token?: string;
  profiles?: string[];
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: undefined,
  token: undefined,
  profiles: [],
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<{ id: number; token: string; profiles?: string[] }>) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.profiles = action.payload.profiles || [];
      state.isLoggedIn = true;
    },
    onLogout: (state) => {
      state.id = undefined;
      state.token = undefined;
      state.profiles = [];
      state.isLoggedIn = false;
    },
  },
});

export const { onLogin, onLogout } = userSlice.actions;
export default userSlice.reducer;
