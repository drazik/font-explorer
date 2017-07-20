const React = require("react");
const styled = require("styled-components").default;

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Loader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  font-size: 4rem;

  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

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
    return <Loader>{this.state.letter}</Loader>
  }
}
