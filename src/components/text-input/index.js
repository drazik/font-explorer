import { h } from "preact";
import styled from "preact-emotion";

const Input = styled.input`
  padding: 3px 10px;
  font-size: 1.15rem;
`;

export default ({
  onChange
}) => (
  <Input
    type="text"
    placeholder="Type some custom text here"
    onChange={onChange}
  />
);
