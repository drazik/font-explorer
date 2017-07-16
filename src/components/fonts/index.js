const React = require("react");
const PropTypes = require("prop-types");
const Font = require("../font");

const style = {
  display: "flex",
  flexFlow: "row wrap"
};

const Fonts = ({
  fonts
}) => (
  <div style={style}>
    {fonts.map(font => <Font font={font} key={font} />)}
  </div>
);

Fonts.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string)
};

module.exports = Fonts;
