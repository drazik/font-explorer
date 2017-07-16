const React = require("react");
const Fonts = require("./components/fonts");
const Loader = require("./components/loader");
const SystemFonts = require("system-font-families").default;

module.exports = class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fonts: null
    };
  }

  componentDidMount() {
    const systemFonts = new SystemFonts();

    systemFonts.getFonts().then(fonts => this.setState({fonts}));
  }

  render() {
    if (!this.state.fonts) {
      return <Loader />;
    }

    return <Fonts fonts={this.state.fonts} />
  }
}