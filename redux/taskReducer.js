import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "store",

    initialState: {
        task: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('task')) : [],
    },
    reducers: {
        updateBasket: (state, action) => {

            let todos = !window.localStorage.getItem('task') ? [] : JSON.parse(window.localStorage.getItem('task'));
            todos.push(action.payload)
            localStorage.setItem("task", JSON.stringify(todos))
            state.task = JSON.parse(localStorage.getItem('task'));

        },
        deleteTask: (state, action) => {
            const taskIndex = action.payload;
            const todos = state.task.filter((value, index) => {
                // console.log(value.title)
                // console.log(taskIndex)
                return index !== taskIndex
            });;

            console.log(todos)
            localStorage.setItem("task", JSON.stringify(todos));
            state.task = JSON.parse(localStorage.getItem("task"));
        },
        editTask: (state, action) => {
            let task = JSON.parse(localStorage.getItem("task"));
            const newTask = action.payload.task;

            task[action.payload.index] = newTask;
            localStorage.setItem('task', JSON.stringify(task));
            state.task = JSON.parse(localStorage.getItem("task"));
        },
        doneTask: (state, action) => {
            let task = JSON.parse(localStorage.getItem("task"));
            task[action.payload.index].done = action.payload.tasks;
            localStorage.setItem('task', JSON.stringify(task));
            state.task = JSON.parse(localStorage.getItem("task"));
        }
    }
})

export const { updateBasket, deleteTask, editTask ,doneTask } = TaskSlice.actions;
export default TaskSlice.reducer;