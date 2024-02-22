import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedConversationId: null,
    loading: false,
    error: null,
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setSelectedConversationId(state, action) {
            state.selectedConversationId = action.payload
        },
    },
})

export const {setSelectedConversationId} = messageSlice.actions;