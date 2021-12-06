import { SET_FIELD, SOLVE_FIELD } from "./reduxTypes"

export const setField=(field:Array<Array<number>>)=>{
    return {
        type: SET_FIELD,
        field: field
    }
}

export type setFieldAction={
    type:string,
    field:Array<Array<number>>
}

export const solveField=()=>{
    return{
        type: SOLVE_FIELD,
    }
}

export type solveFieldAction={
    type:string
}
