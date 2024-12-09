import { configureStore } from "@reduxjs/toolkit";
import workReducer from '../features/works/worksSlice'

export const store = configureStore({
    reducer :{
        works:workReducer,
    }
})