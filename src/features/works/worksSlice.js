import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWorks } from "../../api/WorkApi";

export const fetchWorks = createAsyncThunk('works/fetchWorks', async()=>{
    const response = await getWorks();
    console.log(response)
    return response;

})

const workSlice = createSlice({
    name:"works",
    initialState:{
        loading:false,
        error:null,
        works:[],
    },
    reducers:{},

    extraReducers:(builder)=>{
        builder
            .addCase(fetchWorks.pending,(state)=>{
                state.loading=true
                state.error = null
            })
            .addCase(fetchWorks.fulfilled,(state,action)=>{
                state.loading=false
                state.works = action.payload
            })
            .addCase(fetchWorks.rejected,(state,action)=>{
                state.loading=false
                state.error = action.error.message
            })
    }
})

export default workSlice.reducer