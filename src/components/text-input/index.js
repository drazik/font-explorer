const React = require("react");
const PropTypes = require("prop-types");

const style = {
  padding: "3px 10px",
};

const TextInput = ({
  onChange
}) => (
  <input
    type="text"
    style={style}
    onChange={onChange}
  />
);

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};


module.exports = TextInput;
