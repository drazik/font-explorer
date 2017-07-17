const React = require("react");

const style = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  backgroundColor: "#fff",
  display: "flex",
  height: "60px",
  boxShadow: "5px 0px 10px 0px #000"
};

const TopBar = ({
  children
}) => (
  <div style={style}>
    {children}
  </div>
);

module.exports = TopBar;
