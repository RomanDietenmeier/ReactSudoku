import {  solve } from "../sudokuLogik/sudokuFunctions";
import { setFieldAction, typeOnlyAction } from "./fieldActions";
import { initialState } from "./initialState";
import { CLEAR_FIELD, SET_FIELD, SOLVE_FIELD } from "./reduxTypes";

export const fieldReducer=(state=initialState,action:setFieldAction|typeOnlyAction): {field:Array<Array<number>>}=>{
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
        case CLEAR_FIELD:{
            return{
                ...state,
                field:[
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0]]
            }
        }
        default:
            return state;
    }
}