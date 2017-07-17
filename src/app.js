const React = require("react");
const Fonts = require("./components/fonts");
const Loader = require("./components/loader");
const TopBar = require("./components/top-bar");
const TextInput = require("./components/text-input");
const SystemFonts = require("system-font-families").default;

module.exports = class App extends React.Component {
  constructor() {
    super();

    this.onTextInputChange = this.onTextInputChange.bind(this);

    this.state = {
      fonts: null,
      text: ""
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
        </TopBar>
        <Fonts
          fonts={this.state.fonts}
          text={this.state.text === "" ? undefined : this.state.text}
        />
      </div>
    )
  }
}
