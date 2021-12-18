import styled from "styled-components";

export const FieldDiv = styled.div`
  border: solid 1px black;

  padding: 5px;

  display: table-cell;

  align-items: center;
  text-align: center;

  width: ${Math.min(window.innerWidth * 0.07, window.innerHeight * 0.06)}px;
  height: ${Math.min(window.innerWidth * 0.07, window.innerHeight * 0.06)}px;
`;
