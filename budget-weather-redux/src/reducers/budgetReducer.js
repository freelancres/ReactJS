import { createSlice } from "@reduxjs/toolkit";


const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        expenses:[],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        removeExpense: (state, action) => {
            state.expenses.splice(action.payload, 1);
        },
        clearExpenses: (state) => {
            state.expenses = [];
        }
    }
});


export const { addExpense, removeExpense, clearExpenses } = budgetSlice.actions;
export default budgetSlice.reducer;