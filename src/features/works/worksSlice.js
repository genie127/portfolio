import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWorks, getWorksDetail } from "../../api/WorkApi";

export const fetchWorks = createAsyncThunk('works/fetchWorks', async()=>{
    const response = await getWorks();
    return response;

})
export const fetchWorksDetail = createAsyncThunk('works/fetchWorksDetail', async(id)=>{
    const response = await getWorksDetail(id);
    return response;

})

const workSlice = createSlice({
    name:"works",
    initialState:{
        loading:false,
        error:null,
        works:[],
        worksDetail:null,
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
            .addCase(fetchWorksDetail.pending,(state)=>{
                state.loading=true
                state.error = null
            })
            .addCase(fetchWorksDetail.fulfilled,(state,action)=>{
                state.loading=false
                state.worksDetail = action.payload
            })
            .addCase(fetchWorksDetail.rejected,(state,action)=>{
                state.loading=false
                state.error = action.error.message
            })
    }
})

export default workSlice.reducer