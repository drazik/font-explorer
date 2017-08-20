import { h, Component } from "preact";
import Fonts from "../fonts";
import Loader from "../loader";
import TopBar from "../top-bar";
import TextInput from "../text-input";
import Slider from "../slider";
import SystemFonts from "system-font-families";
import styled from "preact-emotion";

class AppContainer extends Component {
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

  render(props, state) {
    if (!state.fonts) {
      return <Loader />;
    }

    const visibleFonts = state.showSelectedOnly
      ? state.fonts.filter(font => font.selected)
      : state.fonts;

    return <App
      fonts={visibleFonts}
      fontSize={state.fontSize}
      onFontClick={this.onFontClick}
      onFontSizeSliderChange={this.onFontSizeSliderChange}
      onTextInputChange={this.onTextInputChange}
      showAll={this.showAll}
      showSelected={this.showSelected}
      showSelectedOnly={state.showSelectedOnly}
      text={state.text}
    />;
  }
}

const Body = styled.div`
  padding-top: 60px;
`;

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
  <Body>
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
  </Body>
);

export {
  AppContainer,
  App,
};
