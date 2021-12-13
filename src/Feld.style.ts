import styled from "styled-components";

export const FELD = styled.div`
  border: solid 1px black;

  padding: 5px;

  display: grid;
  flex-direction: row;

  align-items: center;
  text-align: center;

  width: ${Math.min(window.innerWidth * 0.07, window.innerHeight * 0.06)}px;
  height: ${Math.min(window.innerWidth * 0.07, window.innerHeight * 0.06)}px;
`;
