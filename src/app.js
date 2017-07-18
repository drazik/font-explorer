const React = require("react");
const Fonts = require("./components/fonts");
const Loader = require("./components/loader");
const TopBar = require("./components/top-bar");
const TextInput = require("./components/text-input");
const Slider = require("./components/slider");
const SystemFonts = require("system-font-families").default;

module.exports = class App extends React.Component {
  constructor() {
    super();

    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onFontSizeSliderChange = this.onFontSizeSliderChange.bind(this);
    this.onFontClick = this.onFontClick.bind(this);
    this.showSelectedOnly = this.showSelectedOnly.bind(this);

    this.state = {
      fonts: null,
      text: "",
      fontSize: 1,
      selectedFonts: []
    };
  }

  componentDidMount() {
    const systemFonts = new SystemFonts();

    systemFonts.getFonts().then(fonts => this.setState({fonts}));
  }

  onTextInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onFontSizeSliderChange(event) {
    this.setState({
      fontSize: event.target.value,
    });
  }

  onFontClick(font) {
    this.setState((previousState) => {
      let selectedFonts;

      if (previousState.selectedFonts.indexOf(font) > -1) {
        selectedFonts = previousState.selectedFonts.filter(f => f !== font);
      } else {
        selectedFonts = [...previousState.selectedFonts, font];
      }

      return {
        selectedFonts,
        showSelectedOnly: previousState.showSelectedOnly && selectedFonts.length > 0
      };
    });
  }

  showSelectedOnly() {
    this.setState({
      showSelectedOnly: true
    });
  }

  render() {
    if (!this.state.fonts) {
      return <Loader />;
    }

    return (
      <div style={{paddingTop: "60px"}}>
        <TopBar>
          <TextInput
            onChange={this.onTextInputChange}
          />
          <Slider
            onChange={this.onFontSizeSliderChange}
            value={this.state.fontSize}
          />
          {
            this.state.selectedFonts.length > 0 &&
            <button
              onClick={this.showSelectedOnly}
              type="button"
            >
              Show selected only
            </button>
          }
        </TopBar>
        <Fonts
          fonts={this.state.fonts}
          text={this.state.text === "" ? undefined : this.state.text}
          size={`${this.state.fontSize}rem`}
          onFontClick={this.onFontClick}
          selectedFonts={this.state.selectedFonts}
          showSelectedOnly={this.state.showSelectedOnly}
        />
      </div>
    )
  }
}
