import {
  badCreateSudoku,
  reverseSolve,
  solve,
  solveRDM,
} from "../sudokuLogik/sudokuFunctions";
import {
  createGameAction,
  setFieldAction,
  typeOnlyAction,
} from "./fieldActions";
import { initialState } from "./initialState";
import {
  CLEAR_GAME,
  CREATE_GAME,
  RANDOM_SOLVE_GAME,
  REVERSE_SOLVE_GAME,
  SET_GAME,
  SOLVE_GAME,
} from "./reduxTypes";

export const fieldReducer = (
  state = initialState,
  action: setFieldAction | typeOnlyAction
): { field: Array<Array<number>> } => {
  switch (action.type) {
    case SET_GAME: {
      return {
        ...state,
        field: (action as setFieldAction).field,
      };
    }
    case SOLVE_GAME: {
      solve(state.field);
      return {
        ...state,
      };
    }
    case REVERSE_SOLVE_GAME: {
      reverseSolve(state.field);
      return {
        ...state,
      };
    }
    case RANDOM_SOLVE_GAME: {
      solveRDM(state.field);
      return {
        ...state,
      };
    }
    case CLEAR_GAME: {
      return {
        ...state,
        field: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      };
    }
    case CREATE_GAME: {
      return {
        ...state,
        field: badCreateSudoku((action as createGameAction).cues),
      };
    }
    default:
      return state;
  }
};
