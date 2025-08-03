import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../local/taskLocal";


export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        tasks: getFromLocal()
    },

    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            setToLocal(state.tasks);
        },

        updateTask: (state, action) => {
            state.tasks = state.tasks.map((task) =>{
                return task.id === action.payload.id ? action.payload : task
            });
            setToLocal(state.tasks);
        },

        removeTask: (state, action) => {
            state.tasks.splice(action.payload, 1);
            setToLocal(state.tasks);
        }
    }
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;