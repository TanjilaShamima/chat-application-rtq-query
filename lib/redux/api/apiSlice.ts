import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

interface RootState {
    authReducer: {
      accessToken: string;
    };
  }

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: async(headers, {getState}) => {
            const token = (getState() as RootState)?.authReducer?.accessToken;
            const auth = JSON.parse(localStorage.getItem('auth') || '');
            if(token || auth.accessToken) {
                headers.set("authorization", `Bearer ${token ? token : auth.accessToken}`);
            }
            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
})