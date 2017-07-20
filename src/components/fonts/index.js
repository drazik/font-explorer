const React = require("react");
const PropTypes = require("prop-types");
const Font = require("../font");

const style = {
  display: "flex",
  flexFlow: "row wrap"
};

const Fonts = ({
  fonts = [],
  itemSize,
  itemText,
  onItemClick,
}) => (
  <div style={style}>
    {
      fonts
        .map(font => (
          <Font
            family={font.family}
            onClick={() => onItemClick(font)}
            selected={font.selected}
            size={itemSize}
            text={itemText}
            key={font.family}
          />
        ))
    }
  </div>
);

Fonts.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.shape({
    family: PropTypes.string,
    selected: PropTypes.bool,
  })),
  itemText: PropTypes.string,
  itemSize: PropTypes.string,
  onItemClick: PropTypes.func.isRequired,
};

module.exports = Fonts;
