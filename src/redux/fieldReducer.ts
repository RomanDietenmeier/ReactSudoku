import {  solve } from "../sudokuLogik/sudokuFunctions";
import { setFieldAction, solveFieldAction } from "./fieldActions";
import { initialState } from "./initialState";
import { SET_FIELD, SOLVE_FIELD } from "./reduxTypes";

export const fieldReducer=(state=initialState,action:setFieldAction|solveFieldAction): {field:Array<Array<number>>}=>{
    switch(action.type){
        case SET_FIELD:{
            return { 
                ...state,
                field:(action as setFieldAction).field
            };
        }
        case SOLVE_FIELD:{
            solve(state.field);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}