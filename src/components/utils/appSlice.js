import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen:true,
        isReplyOpen: true,
        handleSubmit : true,
    },
    reducers:{
        toggleMenu : ( state ) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false
        },
        toggleReply : (state) =>{
            state.isReplyOpen = !state.isReplyOpen
        },
        handleSubmit : (state) => {
            state.handleSubmit = !state.handleSubmit
        }
    }
})
export const { toggleMenu, closeMenu, toggleReply, handleSubmit } = appSlice.actions
export default appSlice.reducer;