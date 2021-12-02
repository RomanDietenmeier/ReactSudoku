import React from 'react';
import { APP, TABLE, TABLE_CELL, TABLE_ROW } from './App.style';
import Kachel from './Kachel';
import {  printField, solve } from './sudokuLogik/sudokuFunctions';

export default function App() {
  const field=[
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6], 
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

  printField(field);  
  solve(field);
  printField(field);
  
  return (
    <APP>
      <TABLE>
        <TABLE_ROW>
          <TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL>
        </TABLE_ROW>
        <TABLE_ROW>
          <TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL>
        </TABLE_ROW>
        <TABLE_ROW>
          <TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL><TABLE_CELL><Kachel/></TABLE_CELL>
        </TABLE_ROW>
      </TABLE>
    </APP>
  );
}
