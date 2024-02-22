import { apiSlice } from "../../api/apiSlice";
import { setSelectedConversationId } from "./messagesSlice";

export const messageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return (
            {
                getMessages: builder.query({
                    query: (conversationId) => `/messages/?conversationId=${conversationId}&_sort=timestamp&_order=des&_page=1&_limit=${process.env.NEXT_PUBLIC_API_CONVERSATION_LIMIT}`,
                    async onQueryStarted(arg, { dispatch, queryFulfilled}) {
                        const result = await queryFulfilled;
                        dispatch(setSelectedConversationId(result?.data?.conversationId));
                    },
                }),
                sendMessage: builder.mutation({
                    query: (message) => ({
                        url: "/messages",
                        method: "POST",
                        body: message,
                    }),
                }),
            }
        )
    }
})

export const {useGetMessagesQuery, useSendMessageMutation} = messageApi;