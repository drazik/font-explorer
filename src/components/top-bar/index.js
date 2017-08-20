import { h } from "preact";
import styled from "preact-emotion";

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 60px;
  padding: 0 10px;

  background-color: #fff;
  box-shadow: 5px 0 10px 0 #000;
  align-items: center;

  > * {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export default TopBar;
