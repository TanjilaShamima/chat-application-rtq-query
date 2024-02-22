/* Instruments */
import { apiSlice } from "./api/apiSlice";
import { authSlice } from "./slices/auth/authSlice";
import { messageSlice } from "./slices/messages/messagesSlice";

export const rootReducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  authReducer: authSlice.reducer,
  messageReducer: messageSlice.reducer,
};
