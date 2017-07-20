const React = require("react");
const PropTypes = require("prop-types");

const style = {
  container: {
    flex: "1 1 auto",
    backgroundColor: "#fff",
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "bold",
    fontFamily: "sans-serif"
  }
};

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
      <div
        onClick={this.props.onClick}
        style={Object.assign(
          {},
          style.container,
          {
            outline: selected ? "2px solid green": "none"
          }
        )}
      >
        <div style={style.title}>
          {family}
        </div>
        <div style={{fontFamily: family, fontSize: size, overflow: "hidden", textOverflow: "ellipsis"}}>
          {text}
        </div>
      </div>
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
