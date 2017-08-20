import { h } from "preact";
import styled from "preact-emotion";

const FontContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px;
  margin: 5px;

  flex: 1 1 auto;
  background-color: #fff;
  cursor: pointer;
  outline-color: #16a646;
  outline-style: solid;
  outline-width: ${props => props.selected ? "4px": "0"};
  transition: outline-width 0.3s;
`;

const FontTitle = styled.div`
  margin-bottom: 10px;

  font-weight: bold;
  font-family: sans-serif;
`;

const FontText = styled.div`
  font-family: ${props => `"${props.family}"`};
  font-size: ${props => props.size};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Font = ({
  family,
  text = "abcdefghijklmnopqrstuvwxyz",
  size,
  onClick,
  selected
}) => (
  <FontContainer
    onClick={onClick}
    selected={selected}
  >
    <FontTitle>
      {family}
    </FontTitle>
    <FontText
      family={family}
      size={size}>
      {text}
    </FontText>
  </FontContainer>
);

export default Font;
