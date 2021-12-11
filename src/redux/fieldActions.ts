import {
  CLEAR_GAME,
  CREATE_GAME,
  RANDOM_SOLVE_GAME,
  REVERSE_SOLVE_GAME,
  SET_GAME,
  SOLVE_GAME,
} from "./reduxTypes";

export const setField = (field: Array<Array<number>>) => {
  return {
    type: SET_GAME,
    field: field,
  };
};

export type setFieldAction = {
  type: string;
  field: Array<Array<number>>;
};

export const solveGame = () => {
  return {
    type: SOLVE_GAME,
  };
};

export const reverseSolveGame = () => {
  return {
    type: REVERSE_SOLVE_GAME,
  };
};

export const randomSolveGame = () => {
  return {
    type: RANDOM_SOLVE_GAME,
  };
};

export const clearGame = () => {
  return {
    type: CLEAR_GAME,
  };
};

export type createGameAction = {
  type: string;
  cues: number;
};

export const createGame = (cues = 17) => {
  return {
    type: CREATE_GAME,
    cues: cues,
  };
};

export type typeOnlyAction = {
  type: string;
};
