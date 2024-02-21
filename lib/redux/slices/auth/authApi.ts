import { apiSlice } from "../../api/apiSlice";

export const apiAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => (
        {
            register: builder.mutation({
                query: (data) => ({
                    url: "/register",
                    method: "POST",
                    body: data
                })
            }),
            login: builder.mutation({
                query: (data) => ({
                    url: "/login",
                    method: "POST",
                    body: data
                })
            })
        }
    )
})

export const {useLoginMutation, useRegisterMutation} = apiAuth;