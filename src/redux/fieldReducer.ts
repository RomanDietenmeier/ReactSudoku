import {
  badCreateSudoku,
  copyField,
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
): { sudoku: Array<Array<number>> } => {
  switch (action.type) {
    case SET_GAME: {
      return {
        ...state,
        sudoku: (action as setFieldAction).sudoku,
      };
    }
    case SOLVE_GAME: {
      const sudoku = copyField(state.sudoku);
      solve(sudoku);
      return {
        ...state,
        sudoku,
      };
    }
    case REVERSE_SOLVE_GAME: {
      const sudoku = copyField(state.sudoku);
      reverseSolve(sudoku);
      return {
        ...state,
        sudoku,
      };
    }
    case RANDOM_SOLVE_GAME: {
      const sudoku = copyField(state.sudoku);
      solveRDM(sudoku);
      return {
        ...state,
        sudoku,
      };
    }
    case CLEAR_GAME: {
      return {
        ...state,
        sudoku: [
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
        sudoku: badCreateSudoku((action as createGameAction).cues),
      };
    }
    default:
      return state;
  }
};
