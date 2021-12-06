import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { APP, TABLE, TABLE_CELL, TABLE_ROW } from './App.style';
import Kachel from './Kachel';
import { setField, solveField } from './redux/fieldActions';

export default function App() {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(setField([
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6], 
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]]));
  }, [dispatch]);

  function onClickSolve(){
    dispatch(solveField());
  }
  

  return (
    <div>
      <APP>
        <TABLE>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={0}/></TABLE_CELL><TABLE_CELL><Kachel x={1} y={0}/></TABLE_CELL><TABLE_CELL><Kachel x={2} y={0}/></TABLE_CELL>
          </TABLE_ROW>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={1}/></TABLE_CELL><TABLE_CELL><Kachel x={1} y={1}/></TABLE_CELL><TABLE_CELL><Kachel x={2} y={1}/></TABLE_CELL>
          </TABLE_ROW>
          <TABLE_ROW>
            <TABLE_CELL><Kachel x={0} y={2}/></TABLE_CELL><TABLE_CELL><Kachel x={1} y={2}/></TABLE_CELL><TABLE_CELL><Kachel x={2} y={2}/></TABLE_CELL>
          </TABLE_ROW>
        </TABLE>
      </APP>
      <button onClick={onClickSolve}>Solve</button>
    </div>
  );
}
