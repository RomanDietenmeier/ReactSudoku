import React from 'react';
import Feld from './Feld';
import { KACHEL } from './Kachel.style';

export default function Kachel() {
  return (
    <KACHEL>
        <table>
            <tbody>
                <tr>
                <td><Feld/></td><td><Feld/></td><td><Feld/></td>
                </tr>
                <tr>
                <td><Feld/></td><td><Feld/></td><td><Feld/></td>
                </tr>
                <tr>
                <td><Feld/></td><td><Feld/></td><td><Feld/></td>
                </tr>
            </tbody>
        </table>
      </KACHEL>
  );
}
