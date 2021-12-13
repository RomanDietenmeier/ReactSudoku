import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { APP, TABLE, TABLE_CELL, TABLE_ROW } from './App.style';
import Kachel from './Kachel';
import { clearGame, createGame, randomSolveGame, reverseSolveGame, setField, solveGame } from './redux/fieldActions';
import { store } from './redux/store';
import { copyField, solveAble } from './sudokuLogik/sudokuFunctions';

export default function App() {
  const dispatch = useDispatch();
  const createTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [solvableText, setSolvableText] = useState('Solvable');

  useEffect(() => {
    dispatch(setField([
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]]));
  }, [dispatch]);

  function onClickSolve() {
    dispatch(solveGame());
  }

  function onClickReverseSolve() {
    dispatch(reverseSolveGame());
  }

  function onClickRandomSolve() {
    dispatch(randomSolveGame());
  }

  function onClickClear() {
    dispatch(clearGame());
  }

  function onClickCreate() {
    let number = parseInt(createTextAreaRef.current ? createTextAreaRef.current.value : '17');
    dispatch(createGame(isNaN(number) ? 17 : number));
  }

  function onClickSolvable() {
    const { field } = store.getState();
    setSolvableText('' + solveAble(copyField(field)));
  }

  return (
    <div>
      <APP>
        <TABLE>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={0} /></TABLE_CELL><TABLE_CELL><Kachel x={1} y={0} /></TABLE_CELL><TABLE_CELL><Kachel x={2} y={0} /></TABLE_CELL>
          </TABLE_ROW>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={1} /></TABLE_CELL><TABLE_CELL><Kachel x={1} y={1} /></TABLE_CELL><TABLE_CELL><Kachel x={2} y={1} /></TABLE_CELL>
          </TABLE_ROW>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={2} /></TABLE_CELL><TABLE_CELL><Kachel x={1} y={2} /></TABLE_CELL><TABLE_CELL><Kachel x={2} y={2} /></TABLE_CELL>
          </TABLE_ROW>
        </TABLE>
      </APP>
      <div><button onClick={onClickCreate}>Create</button><textarea ref={createTextAreaRef}></textarea></div>
      <button onClick={onClickSolvable}>{solvableText}</button><button onClick={onClickSolve}>Solve</button><button onClick={onClickReverseSolve}>Reverse Solve</button><button onClick={onClickRandomSolve}>Random Solve</button><button onClick={onClickClear}>CLEAR</button>
    </div>
  );
}
