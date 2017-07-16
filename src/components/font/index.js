const React = require("react");

const style = {
  container: {
    flex: "1 1 auto",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "5px"
  },
  title: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  }
};

module.exports = ({
  font
}) => (
  <div style={style.container}>
    <div style={style.title}>
      {font}
    </div>
    <div style={{fontFamily: font}}>
      abcdefghijklmnopqrstuvwxyz
    </div>
  </div>
);
