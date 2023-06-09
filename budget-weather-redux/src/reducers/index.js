import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer.js";
import budgetReducer from "./budgetReducer.js";
import languageReducer from "./languageReducer.js";


export default combineReducers({
    weather: weatherReducer,
    budget: budgetReducer,
    language: languageReducer
});
