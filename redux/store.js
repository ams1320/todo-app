import { configureStore , combineReducers, combineReducers} from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import TaskSlice from "./taskReducer";

const combineReducer = combineReducers({
    TaskSlice,
});

export const store = ()=>{
    configureStore({
       reducer :combineReducer,
    
    })
}
export const wrapper = createWrapper(store);