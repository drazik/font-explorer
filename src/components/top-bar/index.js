const React = require("react");
const styled = require("styled-components").default;

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
`;

module.exports = TopBar;
