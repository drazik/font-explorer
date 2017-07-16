const React = require("react");
const Font = require("../font");

const style = {
  display: "flex",
  flexFlow: "row wrap"
}

module.exports = ({
  fonts
}) => (
  <div style={style}>
    {fonts.map(font => <Font font={font} key={font} />)}
  </div>
);
