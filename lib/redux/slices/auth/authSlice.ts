import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
};

export type UserFormType = UserType & {
    confirmPassword: string;
    rememberMe: boolean;
}

export type AuthState = {
  accessToken: string | undefined;
  user: UserType | undefined;
}

const initialState: AuthState = {
  accessToken: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
