import { SET_FIELD } from "./reduxTypes"

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