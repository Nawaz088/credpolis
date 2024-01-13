import "./styles.scss"
import React from "react";

const formatValue = (value) => {
    if (value >= 100000) {
      return `${(value / 100000).toFixed(2)} L`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)} K`;
    } else {
      return value.toString();
    }
  };
const RangeSlider = ({ min, max, value, step, onChange, breakpoints, symbol, name, getFromChild }) => {
  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const newInputVal = Math.min(+e.target.value, max);
    setMaxValue(newInputVal);
    onChange({ min: minValue, max: newInputVal });
    getFromChild(newInputVal); 
  };

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
    getFromChild(newMaxVal); // Call getFromChild with the updated maxValue
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="w-[500px] m-auto p-[5px]">
      
      <div className="names">
        <h3>{name}</h3>
      </div>
      <div className="input-box">
        <p>{symbol}</p>
        <input
          type="number"
          value={maxValue}
          
          onChange={handleInputChange}
        />
      </div>
      <div className="wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>
        <div className="control-wrapper">
          <div className="rail">
            <div
              className="inner-rail"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
            {breakpoints.map((breakpoint) => (
              <div
                key={breakpoint}
                className="breakpoint"
                style={{ left: `${((breakpoint - min) / (max - min)) * 100}%` }}
              />
            ))}
          </div>
          <div className="control" style={{ left: `${maxPos}%` }} />
        </div>
      </div>
      
    </div>
  );
};

export default RangeSlider;
