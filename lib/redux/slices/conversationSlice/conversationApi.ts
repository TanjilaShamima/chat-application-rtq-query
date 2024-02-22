import { apiSlice } from "../../api/apiSlice";

// ?participants_like=${email}&_sort=timestamp&_order=des&_page=1&_limit=${process.env.NEXT_PUBLIC_API_CONVERSATION_LIMIT}

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: (email) =>
        `/conversations/?participants_like=${email}&_sort=timestamp&_order=des&_page=1&_limit=${process.env.NEXT_PUBLIC_API_CONVERSATION_LIMIT}`,
    }),
  }),
});

export const { useGetConversationQuery } = conversationApi;
