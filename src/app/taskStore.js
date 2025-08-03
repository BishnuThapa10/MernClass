import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/todo/taskSlice";



export const taskStore = configureStore({
    reducer: {
        taskSlice: taskSlice.reducer
    }
});