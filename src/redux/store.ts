import { createStore } from "redux";
import { fieldReducer } from "./fieldReducer";
import { initialState } from "./initialState";


export const store=createStore(fieldReducer,initialState,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
