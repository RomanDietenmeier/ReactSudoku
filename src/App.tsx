import React from 'react';
import { APP, TABLE, TABLE_CELL, TABLE_ROW } from './App.style';
import Kachel from './Kachel';

export default function App() {
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
