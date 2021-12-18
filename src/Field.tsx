import React from 'react';
import { FieldDiv } from './Field.style';


export function Field(props: { value: number, x: number, y: number }) {

  return (
    <FieldDiv onClick={() => alert(`(${props.x}|${props.y})`)}>
      {props.value !== 0 ? props.value : ''}
    </FieldDiv>
  );
}

