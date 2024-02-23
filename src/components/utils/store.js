import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchAppSlice from "./searchAppSlice";

const store = configureStore({
    reducer :{
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        searchApp : searchAppSlice,
    }
})

export default store;