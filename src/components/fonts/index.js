import { h } from "preact";
import Font from "../font";
import styled from "preact-emotion";

const FontsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Fonts = ({
  fonts = [],
  itemSize,
  itemText,
  onItemClick,
}) => (
  <FontsContainer>
    {
      fonts
        .map(font => (
          <Font
            family={font.family}
            onClick={() => onItemClick(font)}
            selected={font.selected}
            size={itemSize}
            text={itemText}
            key={font.family}
          />
        ))
    }
  </FontsContainer>
);

export default Fonts;
