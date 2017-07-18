const React = require("react");
const PropTypes = require("prop-types");

const style = {
  container: {
    flex: "1 1 auto",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  }
};

class Font extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.font);
  }

  render() {
    const {
      font,
      text,
      size,
      onClick,
      selected
    } = this.props;

    return (
      <div
        onClick={this.onClick}
        style={Object.assign(
          {},
          style.container,
          {
            outline: selected ? "2px solid green": "none"
          }
        )}
      >
        <div style={style.title}>
          {font}
        </div>
        <div style={{fontFamily: font, fontSize: size}}>
          {text}
        </div>
      </div>
    );
  }
}

Font.propTypes = {
  font: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

module.exports = Font;
