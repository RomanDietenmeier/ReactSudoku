import { setFieldAction } from "./fieldActions";
import { initialState } from "./initialState";
import { SET_FIELD } from "./reduxTypes";

export const fieldReducer=(state=initialState,action:setFieldAction): {field:Array<Array<number>>}=>{
    switch(action.type){
        case SET_FIELD:{
            return { 
                ...state,
                field:action.field
            };
        }
        default:
            return state;
    }
}