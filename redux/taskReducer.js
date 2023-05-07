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
            localStorage.setItem("task",JSON.stringify(todos))
            state.task = JSON.parse(localStorage.getItem('task'));

            console.log(state.task)
            // let todos = [...state.task,action.payload]

        },
        deleteTask:(state,action)=>{
           let  taskIndex = action.payload;
           let todos = !window.localStorage.getItem('task') ? [] : JSON.parse(window.localStorage.getItem('task'));
           todos.filter((value,index )=> index !== taskIndex);
           localStorage.setItem("task",JSON.stringify(todos));
           state.task = JSON.parse(localStorage.getItem("task"));
        }
    }
})

export const { updateBasket,deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;