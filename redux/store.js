import { configureStore ,} from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import TaskSlice from "./taskReducer";


const store = 
    configureStore({
       reducer :{
        store:TaskSlice
       },
    
    })

export default store;