import { combineReducers } from "redux";
import { AddStudentReducer } from './AddStudentReducer';

export const reducers = combineReducers({
    students:AddStudentReducer
});