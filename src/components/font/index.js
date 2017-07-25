const React = require("react");
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const FontContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px;
  margin: 5px;

  flex: 1 1 auto;
  background-color: #fff;
  cursor: pointer;
  outline-color: #16a646;
  outline-style: solid;
  outline-width: ${props => props.selected ? "4px": "0"};
  transition: outline-width 0.3s;
`;

const FontTitle = styled.div`
  margin-bottom: 10px;

  font-weight: bold;
  font-family: sans-serif;
`;

const FontText = styled.div`
  font-family: ${props => `"${props.family}"`};
  font-size: ${props => props.size};
  overflow: hidden;
  text-overflow: ellipsis;
`;

class Font extends React.Component {
  render() {
    const {
      family,
      text,
      size,
      onClick,
      selected
    } = this.props;

    return (
      <FontContainer
        onClick={this.props.onClick}
        selected={selected}
      >
        <FontTitle>
          {family}
        </FontTitle>
        <FontText
          family={family}
          size={size}>
          {text}
        </FontText>
      </FontContainer>
    );
  }
}

Font.propTypes = {
  family: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
};

Font.defaultProps = {
  text: "abcdefghijklmnopqrstuvwxyz",
  selected: false,
  size: "1rem",
};

module.exports = Font;
