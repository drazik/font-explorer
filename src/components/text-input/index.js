const React = require("react");
const PropTypes = require("prop-types");

const style = {
  padding: "3px 10px",
  fontSize: "1.15rem",
};

const TextInput = ({
  onChange
}) => (
  <input
    type="text"
    style={style}
    onChange={onChange}
    placeholder="Type some custom text here"
  />
);

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};


module.exports = TextInput;
