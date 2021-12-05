import React from 'react';
import Feld from './Feld';
import { KACHEL, KACHEL_CELL, KACHEL_ROW, KACHEL_TABLE } from './Kachel.style';

type KachelProps={
  x:number;
  y:number;
}
  


export default function Kachel(props:KachelProps) {
  return (
    <KACHEL>
      <KACHEL_TABLE>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld x={props.x*3} y={props.y*3}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+1} y={props.y*3}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+2} y={props.y*3}/></KACHEL_CELL>
        </KACHEL_ROW>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld x={props.x*3} y={props.y*3+1}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+1} y={props.y*3+1}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+2} y={props.y*3+2}/></KACHEL_CELL>
        </KACHEL_ROW>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld x={props.x*3} y={props.y*3+2}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+1} y={props.y*3+2}/></KACHEL_CELL><KACHEL_CELL><Feld x={props.x*3+2} y={props.y*3+2}/></KACHEL_CELL>
        </KACHEL_ROW>
      </KACHEL_TABLE>
      </KACHEL>
  );
}
