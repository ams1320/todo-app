import { createSlice } from "@reduxjs/toolkit";

const TaskSlice =createSlice({
    name:"store",
    initialState:{
        task :[]
    },
    reducers:{
        updateBasket:(state,action)=>{

            state.task = [...state.task,action.payload]
            console.log(state.task)
        }
    }
})

export const {updateBasket} = TaskSlice.actions;
export default TaskSlice.reducer;