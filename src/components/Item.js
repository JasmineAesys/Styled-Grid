import styled from "styled-components";
import { Header } from "./Header";

export const Item = styled(Header)`
  border-bottom: 1px solid black;
  background-color: ${(props) => props.inputColor};
  align-items: center;
`;
