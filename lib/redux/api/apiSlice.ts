import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_APP_BASE_URL
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
})