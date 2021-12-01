import React from 'react';
import Feld from './Feld';
import { KACHEL, KACHEL_CELL, KACHEL_ROW, KACHEL_TABLE } from './Kachel.style';

export default function Kachel() {
  return (
    <KACHEL>
      <KACHEL_TABLE>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL>
        </KACHEL_ROW>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL>
        </KACHEL_ROW>
        <KACHEL_ROW>
          <KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL><KACHEL_CELL><Feld/></KACHEL_CELL>
        </KACHEL_ROW>
      </KACHEL_TABLE>
      </KACHEL>
  );
}
