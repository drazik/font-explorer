import { h, Component } from "preact";
import styled from "preact-emotion";

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

export default class extends Component {
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

  render(props, state) {
    return <Loader>{state.letter}</Loader>
  }
}
