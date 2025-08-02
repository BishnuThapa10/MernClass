import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../local/local";
import UpdateEmployee from "./UpdateEmployee";



export const employeeSlice = createSlice({
    name: 'employeeSlice',
    initialState: {
        employees: getFromLocal()
    },

    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            setToLocal(state.employees);
        },

        updateEmployee: (state, action) => {
            state.employees = state.employees.map((employee) =>{
                return employee.id === action.payload.id ? action.payload : employee
            });
            setToLocal(state.employees);
        },

        removeEmployee: (state, action) => {
            state.employees.splice(action.payload, 1);
            setToLocal(state.employees);
        }
    }
});

export const { addEmployee, updateEmployee, removeEmployee } = employeeSlice.actions;