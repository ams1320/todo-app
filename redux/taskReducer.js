const { createSlice } = require("@reduxjs/toolkit");

const TaskSlice =createSlice({
    name:"store",
    initialState:{
        task :{}
    },
    reducers:{
        updateBasket:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {updateBasket} = TaskSlice.actions;
export default TaskSlice;