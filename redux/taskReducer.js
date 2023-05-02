import { createSlice } from "@reduxjs/toolkit";

const TaskSlice =createSlice({
    name:"store",
    initialState:{
        task :{}
    },
    reducers:{
        updateBasket:(state,action)=>{
            // state.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const {updateBasket} = TaskSlice.actions;
export default TaskSlice;