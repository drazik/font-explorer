const React = require("react");
const Fonts = require("../fonts");
const Loader = require("../loader");
const TopBar = require("../top-bar");
const TextInput = require("../text-input");
const Slider = require("../slider");
const SystemFonts = require("system-font-families").default;
const PropTypes = require("prop-types");

class AppContainer extends React.Component {
  state = {
    fonts: null,
    text: "",
    fontSize: 1,
    showSelectedOnly: false,
  };

  componentDidMount = async () => {
    const systemFonts = new SystemFonts();

    const fonts = await systemFonts.getFonts();

    this.setState({
      fonts: fonts.map(font => ({
        family: font,
        selected: false,
      })),
    });
  };

  onTextInputChange = (event) => this.setState({
    text: event.target.value,
  });

  onFontSizeSliderChange = (event) => this.setState({
    fontSize: event.target.value,
  });

  onFontClick = (font) => this.setState(
    ({fonts, showSelectedOnly}) => {
      const fontIndex = fonts.indexOf(font);
      const newFont = Object.assign({}, font, {selected: !font.selected});
      const newFonts = [
        ...fonts.slice(0, fontIndex),
        newFont,
        ...fonts.slice(fontIndex + 1)
      ];

      return {
        fonts: newFonts,
        showSelectedOnly: showSelectedOnly && newFonts.filter(f => f.selected).length > 0
      }
    }
  );

  showSelected = () => this.setState({
    showSelectedOnly: true,
  });

  showAll = () => this.setState({
    showSelectedOnly: false,
  });

  render() {
    if (!this.state.fonts) {
      return <Loader />;
    }

    const visibleFonts = this.state.showSelectedOnly
      ? this.state.fonts.filter(font => font.selected)
      : this.state.fonts;

    return <App
      fonts={visibleFonts}
      fontSize={this.state.fontSize}
      onFontClick={this.onFontClick}
      onFontSizeSliderChange={this.onFontSizeSliderChange}
      onTextInputChange={this.onTextInputChange}
      showAll={this.showAll}
      showSelected={this.showSelected}
      showSelectedOnly={this.state.showSelectedOnly}
      text={this.state.text}
    />;
  }
}

const App = ({
  fonts,
  fontSize,
  onFontClick,
  onFontSizeSliderChange,
  onTextInputChange,
  showAll,
  showSelected,
  showSelectedOnly,
  text,
}) => (
  <div style={{paddingTop: "60px"}}>
    <TopBar>
      <TextInput
        onChange={onTextInputChange}
      />
      <Slider
        onChange={onFontSizeSliderChange}
        value={fontSize}
      />
      {
        !showSelectedOnly && fonts.filter(f => f.selected).length > 0 &&
        <button
          onClick={showSelected}
          type="button"
        >
          Show selected only
        </button>
      }
      {
        showSelectedOnly &&
        <button
          onClick={showAll}
          type="button"
        >
          Show all
        </button>
      }
    </TopBar>
    <Fonts
      fonts={fonts}
      itemText={text === "" ? undefined : text}
      itemSize={`${fontSize}rem`}
      onItemClick={onFontClick}
    />
  </div>
);

App.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.shape({
    family: PropTypes.string,
    selected: PropTypes.bool,
  })),
  fontSize: PropTypes.number,
  onFontClick: PropTypes.func.isRequired,
  onFontSizeSliderChange: PropTypes.func.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  selectedFonts: PropTypes.arrayOf(PropTypes.string),
  showAll: PropTypes.func.isRequired,
  showSelected: PropTypes.func.isRequired,
  showSelectedOnly: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

module.exports = {
  AppContainer,
  App,
};
