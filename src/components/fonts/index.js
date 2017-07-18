const React = require("react");
const PropTypes = require("prop-types");
const Font = require("../font");

const style = {
  display: "flex",
  flexFlow: "row wrap"
};

const Fonts = ({
  fonts,
  text = "abcdefghijklmnopqrstuvwxyz",
  size,
  onFontClick,
  selectedFonts,
  showSelectedOnly
}) => (
  <div style={style}>
    {
      fonts
        .filter(font => (showSelectedOnly && selectedFonts.indexOf(font) > -1) || !showSelectedOnly)
        .map(font => (
          <Font
            font={font}
            text={text}
            size={size}
            onClick={onFontClick}
            selected={selectedFonts.indexOf(font) > -1}
            key={font}
          />
        ))
    }
  </div>
);

Fonts.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  size: PropTypes.string.isRequired,
};

module.exports = Fonts;
