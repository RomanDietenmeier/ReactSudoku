import React from 'react';
import { connect } from 'react-redux';
import { FELD } from './Feld.style';
import { initialState } from './redux/initialState';

type feldProps = {
  x: number;
  y: number;
}


export function Feld(props: { value: number }) {

  return (
    <FELD>
      {props.value !== 0 ? props.value : ''}
    </FELD>
  );
}
function mapStateToProps(state: typeof initialState, ownProps: feldProps) {
  return {
    value: state.field[ownProps.x][ownProps.y],
  }
}

export default connect(mapStateToProps)(Feld);
