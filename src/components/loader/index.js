const React = require("react");

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const style = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "4rem"
};

module.exports = class extends React.Component {
  constructor() {
    super();

    this.state = {
      letter: letters[0]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState((prevState) => {
      const index = (letters.indexOf(prevState.letter) + 1) % letters.length;

      return {
        letter: letters[index]
      };
    });
  }

  render() {
    return <div style={style}>{this.state.letter}</div>
  }
}
