import React from 'react';
import { FELD } from './Feld.style';


let number=0;
export default function Feld() {
  return (
    <FELD>
      {(number++%9)+1}
    </FELD>
  );
}
