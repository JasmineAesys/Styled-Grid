import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 30px;
  align-self: center;
  width: 90%;
`;
