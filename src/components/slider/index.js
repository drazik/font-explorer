const React = require("react");
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const SliderContainer = styled.div`
  display: inline-flex;

  align-items: center;
`;

const SliderBoundary = styled.span`
  font-family: serif;
  font-weight: bold;
`;

const SliderBoundaryLower = SliderBoundary.extend`
  font-size: 0.8rem;
`;

const SliderBoundaryUpper = SliderBoundary.extend`
  font-size: 1.3rem;
`;

const SliderInput = styled.input.attrs({
  type: "range",
  min: props => props.min || 1,
  max: props => props.max || 4,
  step: props => props.step || 1,
  onChange: props => props.onChange,
})`
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

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

module.exports = Slider;
