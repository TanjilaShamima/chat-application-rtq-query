/* Instruments */
import { apiSlice } from "./api/apiSlice";
import { authSlice } from "./slices/auth/authSlice";

export const rootReducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  authReducer: authSlice.reducer,
};
