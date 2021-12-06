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
            //ToDo does not work
            let newField=new Array<Array<number>>(9);
            for(let i=0;i<state.field.length;i++){
                newField[i]=new Array<number>(9);
                for( let j=0;j<state.field.length;j++){
                    newField[i][j]=state.field[i][j];                    
                }
            }
            return {
                ...state,
                field:solve(newField)
            };
        }
        default:
            return state;
    }
}