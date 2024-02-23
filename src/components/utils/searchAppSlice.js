import { createSlice } from "@reduxjs/toolkit";

const searchAppSlice = createSlice({
    name : "searchApp",
    initialState : {
        search :[]
    },
    reducers: {
        addSearch : (state, action) =>{
            state.search.push(action.payload)
        }
    }
})

export const { addSearch } = searchAppSlice.actions;

export default searchAppSlice.reducer;