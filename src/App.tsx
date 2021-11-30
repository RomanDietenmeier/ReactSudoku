import React from 'react';
import { APP, TABLE } from './App.style';
import Kachel from './Kachel';

export default function App() {
  return (
    <APP>
      <TABLE>
        <tbody>
          <tr>
            <td><Kachel/></td><td><Kachel/></td><td><Kachel/></td>
          </tr>
          <tr>
            <td><Kachel/></td><td><Kachel/></td><td><Kachel/></td>
          </tr>
          <tr>
            <td><Kachel/></td><td><Kachel/></td><td><Kachel/></td>
          </tr>
        </tbody>
      </TABLE>
    </APP>
  );
}
