import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

console.log("process.env.NEXT_PUBLIC_API_BASE_URL", process.env.NEXT_PUBLIC_API_BASE_URL);

export const apiAuth = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const payload = {
            accessToken: result.data.accessToken,
            user: result.data.user,
          };
          localStorage.setItem("auth", JSON.stringify(payload));
          dispatch(userLoggedIn(payload));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const payload = {
            accessToken: result.data.accessToken,
            user: result.data.user,
          };
          localStorage.setItem("auth", JSON.stringify(payload));
          dispatch(userLoggedIn(payload));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = apiAuth;
