/* Instruments */
import { apiSlice } from "./api/apiSlice";

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
};
