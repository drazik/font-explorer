const React = require("react");
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const TextInput = styled.input.attrs({
  type: "text",
  placeholder: "Type some custom text here",
})`
  padding: 3px 10px;
  font-size: 1.15rem;
`;

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};


module.exports = TextInput;
