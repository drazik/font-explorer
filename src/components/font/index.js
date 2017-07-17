const React = require("react");
const PropTypes = require("prop-types");

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

const Font = ({
  font,
  text,
  size
}) => (
  <div style={style.container}>
    <div style={style.title}>
      {font}
    </div>
    <div style={{fontFamily: font, fontSize: size}}>
      {text}
    </div>
  </div>
);

Font.propTypes = {
  font: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

module.exports = Font;
