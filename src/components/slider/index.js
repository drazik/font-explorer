const React = require("react");
const PropTypes = require("prop-types");

const Slider = ({
  min = 1,
  max = 4,
  step = 0.5,
  value = 1,
  onChange
}) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
  />
);

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

module.exports = Slider;
