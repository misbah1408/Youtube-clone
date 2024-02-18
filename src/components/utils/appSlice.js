import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen:true,
        isReplyOpen: true,
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
        }
    }
})
export const { toggleMenu, closeMenu, toggleReply } = appSlice.actions
export default appSlice.reducer;