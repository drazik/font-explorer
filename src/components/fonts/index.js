const React = require("react");
const PropTypes = require("prop-types");
const Font = require("../font");

const style = {
  display: "flex",
  flexFlow: "row wrap"
};

const Fonts = ({
  fonts,
  text = "abcdefghijklmnopqrstuvwxyz"
}) => (
  <div style={style}>
    {fonts.map(font => <Font font={font} text={text} key={font} />)}
  </div>
);

Fonts.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
};

module.exports = Fonts;
