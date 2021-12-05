import React, { useEffect,  useState } from 'react';
import { useStore } from 'react-redux';
import { FELD } from './Feld.style';

type feldProps={
  x:number;
  y:number;
}


export default function Feld(props:feldProps) {
  const {field}=useStore().getState();
  const [fieldValue,setFieldValue]=useState(-1);
  
  useEffect(() => {
    setFieldValue(field[props.x][props.y]);
  }, [field,props])
  return (
    <FELD>
      {fieldValue}
    </FELD>
  );
}
