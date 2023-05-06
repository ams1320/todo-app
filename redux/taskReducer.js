import { createSlice } from "@reduxjs/toolkit";



const TaskSlice = createSlice({
    name: "store",
    
    initialState: {
        task:typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('task')) : [],
    },
    reducers: {
        updateBasket: (state, action) => {

            let todos = !window.localStorage.getItem('task') ? [] : JSON.parse(window.localStorage.getItem('task'));
            todos.push(action.payload)
            state.task = todos;

            console.log(state.task)
            // let todos = [...state.task,action.payload]

        }
    }
})

export const { updateBasket } = TaskSlice.actions;
export default TaskSlice.reducer;