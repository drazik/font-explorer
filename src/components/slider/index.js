import { h } from "preact";
import styled from "preact-emotion";
import { css } from "emotion";

const SliderContainer = styled.div`
  display: inline-flex;

  align-items: center;
`;

const sliderBoundaryBase = css`
  font-family: serif;
  font-weight: bold;
`;

const SliderBoundaryLower = styled.span`
  composes: ${sliderBoundaryBase};
  font-size: 0.8rem;
`;

const SliderBoundaryUpper = styled.span`
  composes: ${sliderBoundaryBase};
  font-size: 1.3rem;
`;

const SliderInput = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;

const Slider = ({
  min = 1,
  max = 4,
  step = 0.5,
  value = 1,
  onChange
}) => (
  <SliderContainer>
    <SliderBoundaryLower>
      A
    </SliderBoundaryLower>
    <SliderInput
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
    <SliderBoundaryUpper>
      A
    </SliderBoundaryUpper>
  </SliderContainer>
);

export default Slider;
