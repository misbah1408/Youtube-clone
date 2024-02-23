import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./Constants";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        messeges:[]
    },
    reducers:{
        addMesseges : (state, action) =>{
            state.messeges.splice(CHAT_COUNT, 1)
            state.messeges.unshift(action.payload)
        }
    }
})
export const { addMesseges } = chatSlice.actions;
export default chatSlice.reducer