import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDiv, BoxCell, BoxRow, } from './App.style';
import { Field } from './Field';
import { clearGame, createGame, randomSolveGame, reverseSolveGame, setField, solveGame } from './redux/fieldActions';
import { initialState } from './redux/initialState';
import { store } from './redux/store';
import { copyField, createSudoku, getDifficultyScore, solveAble, hasOneSolution, getClueCount, newBadCreateSudoku, goodCreateSudoku } from './sudokuLogik/sudokuFunctions';

export default function App() {
  const dispatch = useDispatch();
  const sudoku = useSelector(state => (state as typeof initialState).sudoku, (lhs, rhs) => {
    return lhs === rhs;
  });

  const createTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [solvableText, setSolvableText] = useState('Solvable');
  const [oneSolutionText, setOneSolutionText] = useState('OneSolution?');
  const [scoreText, setScoreText] = useState('Calc Score');
  const [clueCount, setClueCount] = useState('Clue Count');

  return (
    <div>
      <AppDiv>
        <BoxRow>
          <BoxCell>
            <div><Field value={sudoku[0][0]} x={0} y={0} /><Field value={sudoku[1][0]} x={1} y={0} /><Field value={sudoku[2][0]} x={2} y={0} /></div>
            <div><Field value={sudoku[0][1]} x={0} y={1} /><Field value={sudoku[1][1]} x={1} y={1} /><Field value={sudoku[2][1]} x={2} y={1} /></div>
            <div><Field value={sudoku[0][2]} x={0} y={2} /><Field value={sudoku[1][2]} x={1} y={2} /><Field value={sudoku[2][2]} x={2} y={2} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[3][0]} x={3} y={0} /><Field value={sudoku[4][0]} x={4} y={0} /><Field value={sudoku[5][0]} x={5} y={0} /></div>
            <div><Field value={sudoku[3][1]} x={3} y={1} /><Field value={sudoku[4][1]} x={4} y={1} /><Field value={sudoku[5][1]} x={5} y={1} /></div>
            <div><Field value={sudoku[3][2]} x={3} y={2} /><Field value={sudoku[4][2]} x={4} y={2} /><Field value={sudoku[5][2]} x={5} y={2} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[6][0]} x={6} y={0} /><Field value={sudoku[7][0]} x={7} y={0} /><Field value={sudoku[8][0]} x={8} y={0} /></div>
            <div><Field value={sudoku[6][1]} x={6} y={1} /><Field value={sudoku[7][1]} x={7} y={1} /><Field value={sudoku[8][1]} x={8} y={1} /></div>
            <div><Field value={sudoku[6][2]} x={6} y={2} /><Field value={sudoku[7][2]} x={7} y={2} /><Field value={sudoku[8][2]} x={8} y={2} /></div>
          </BoxCell>
        </BoxRow>
        <BoxRow>
          <BoxCell>
            <div><Field value={sudoku[0][3]} x={0} y={3} /><Field value={sudoku[1][3]} x={1} y={3} /><Field value={sudoku[2][3]} x={2} y={3} /></div>
            <div><Field value={sudoku[0][4]} x={0} y={4} /><Field value={sudoku[1][4]} x={1} y={4} /><Field value={sudoku[2][4]} x={2} y={4} /></div>
            <div><Field value={sudoku[0][5]} x={0} y={5} /><Field value={sudoku[1][5]} x={1} y={5} /><Field value={sudoku[2][5]} x={2} y={5} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[3][3]} x={3} y={3} /><Field value={sudoku[4][3]} x={4} y={3} /><Field value={sudoku[5][3]} x={5} y={3} /></div>
            <div><Field value={sudoku[3][4]} x={3} y={4} /><Field value={sudoku[4][4]} x={4} y={4} /><Field value={sudoku[5][4]} x={5} y={4} /></div>
            <div><Field value={sudoku[3][5]} x={3} y={5} /><Field value={sudoku[4][5]} x={4} y={5} /><Field value={sudoku[5][5]} x={5} y={5} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[6][3]} x={6} y={3} /><Field value={sudoku[7][3]} x={7} y={3} /><Field value={sudoku[8][3]} x={8} y={3} /></div>
            <div><Field value={sudoku[6][4]} x={6} y={4} /><Field value={sudoku[7][4]} x={7} y={4} /><Field value={sudoku[8][4]} x={8} y={4} /></div>
            <div><Field value={sudoku[6][5]} x={6} y={5} /><Field value={sudoku[7][5]} x={7} y={5} /><Field value={sudoku[8][5]} x={8} y={5} /></div>
          </BoxCell>
        </BoxRow>
        <BoxRow>
          <BoxCell>
            <div><Field value={sudoku[0][6]} x={0} y={6} /><Field value={sudoku[1][6]} x={1} y={6} /><Field value={sudoku[2][6]} x={2} y={6} /></div>
            <div><Field value={sudoku[0][7]} x={0} y={7} /><Field value={sudoku[1][7]} x={1} y={7} /><Field value={sudoku[2][7]} x={2} y={7} /></div>
            <div><Field value={sudoku[0][8]} x={0} y={8} /><Field value={sudoku[1][8]} x={1} y={8} /><Field value={sudoku[2][8]} x={2} y={8} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[3][6]} x={3} y={6} /><Field value={sudoku[4][6]} x={4} y={6} /><Field value={sudoku[5][6]} x={5} y={6} /></div>
            <div><Field value={sudoku[3][7]} x={3} y={7} /><Field value={sudoku[4][7]} x={4} y={7} /><Field value={sudoku[5][7]} x={5} y={7} /></div>
            <div><Field value={sudoku[3][8]} x={3} y={8} /><Field value={sudoku[4][8]} x={4} y={8} /><Field value={sudoku[5][8]} x={5} y={8} /></div>
          </BoxCell>
          <BoxCell>
            <div><Field value={sudoku[6][6]} x={6} y={6} /><Field value={sudoku[7][6]} x={7} y={6} /><Field value={sudoku[8][6]} x={8} y={6} /></div>
            <div><Field value={sudoku[6][7]} x={6} y={7} /><Field value={sudoku[7][7]} x={7} y={7} /><Field value={sudoku[8][7]} x={8} y={7} /></div>
            <div><Field value={sudoku[6][8]} x={6} y={8} /><Field value={sudoku[7][8]} x={7} y={8} /><Field value={sudoku[8][8]} x={8} y={8} /></div>
          </BoxCell>
        </BoxRow>
      </AppDiv>
      <div><button onClick={() => {
        let number = parseInt(createTextAreaRef.current ? createTextAreaRef.current.value : '17');
        dispatch(createGame(isNaN(number) ? 17 : number));
      }}>BadCreate</button><button onClick={() => {
        let number = parseInt(createTextAreaRef.current ? createTextAreaRef.current.value : '17');
        dispatch(setField(newBadCreateSudoku(isNaN(number) ? 17 : number)));
      }}>NewBadCreate</button><button onClick={() => {
        let number = parseInt(createTextAreaRef.current ? createTextAreaRef.current.value : '30');
        dispatch(setField(goodCreateSudoku(isNaN(number) ? 30 : number)));
      }}>goodCreate?</button><textarea ref={createTextAreaRef}></textarea></div>
      <div><button onClick={() => { dispatch(setField(createSudoku())); }}>Create</button></div>
      <div><button onClick={() => { setSolvableText('' + solveAble(copyField(store.getState().sudoku))); }}>{solvableText}</button><button onClick={() => { setOneSolutionText('' + hasOneSolution(store.getState().sudoku)); }}>{oneSolutionText}</button><button onClick={() => { setScoreText('' + getDifficultyScore(store.getState().sudoku)); }}>{scoreText}</button><button onClick={() => { setClueCount('' + getClueCount(store.getState().sudoku)); }}>{clueCount}</button></div>
      <button onClick={() => { dispatch(solveGame()); }}>Solve</button><button onClick={() => { dispatch(reverseSolveGame()); }}>Reverse Solve</button><button onClick={() => { dispatch(randomSolveGame()); }}>Random Solve</button><button onClick={() => { dispatch(clearGame()); }}>CLEAR</button>
    </div >
  );
}
