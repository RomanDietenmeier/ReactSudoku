import { createStore } from "redux";
import { fieldReducer } from "./fieldReducer";
import { initialState } from "./initialState";

export const store=createStore(fieldReducer,initialState);