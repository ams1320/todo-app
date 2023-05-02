import { configureStore } from "@reduxjs/toolkit"
import TaskSlice from "./taskReducer";
const store = ()=>{
    configureStore({
        task : TaskSlice
    
    })
}
export default store;