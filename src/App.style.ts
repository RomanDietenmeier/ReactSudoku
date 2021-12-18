import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
`;

export const BoxCell = styled.div`
  border: solid 1px black;
  display: grid-cell;
`;

export const BoxRow = styled.div`
  display: flex;
`;
