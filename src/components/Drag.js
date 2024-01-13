import React, { useState, useEffect } from 'react';
import './CustomSlider.css';
import { alignProperty } from '@mui/material/styles/cssUtils';

function Drag() {
  const [min] = useState(0);
  const [max] = useState(400000);
  const [cur, setCur] = useState(0);
  const [inputValue, setInputValue] = useState(min);

  const asMoney = (value) => {
    return '$' + parseFloat(value).toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  };

  const generateBackground = () => {
    if (cur === min) {
      return 'background: linear-gradient(to right, #50299c, #7a00ff 0%, #d3edff 0%, #dee1e2 100%)';
    }

    let percentage = ((cur - min) / (max - min)) * 100;
    return (
      'background: linear-gradient(to right, #50AC97 ' +
      percentage +
      '%, #d3edff ' +
      percentage +
      '%, #dee1e2 100%)'
    );
  };

  const handleInputChange = (event) => {
    let newValue = parseFloat(event.target.value);
    if (isNaN(newValue) || newValue < min) {
      newValue = min;
    } else if (newValue > max) {
      newValue = max;
    }
    setInputValue(newValue);
    setCur(newValue);
  };

  const handleSliderChange = (e) => {
    setCur(e.target.value);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    document
      .querySelector('.range__slider input[type="range"]')
      .setAttribute('min', min);
    document
      .querySelector('.range__slider input[type="range"]')
      .setAttribute('max', max);
    document
      .querySelector('.range__slider input[type="range"]')
      .setAttribute('value', cur);
  }, [min, max, cur]);

  return (
    <div className="flex w-[500px] flex-col  ">
  <form className="range flex flex-col">
    <div className="range__value flex justify-between items-center border-none ">
      <div className="w-1/2 text-left">
        <h3>Loan Amount</h3>
      </div>
      <div className="w-1/2">
        <input
          className="w-[100px] border-none w-full"
          type="text"
          value={`₹ ${inputValue}`}        
           onChange={handleInputChange}
        />
      </div>
    </div>
    <div className="form-group range__slider">
      <input
        type="range"
        step="500"
        min={min}
        max={max}
        value={cur}
        onChange={handleSliderChange}
      />
    </div>
  </form>
  <style>
    {`
      .range__slider input[type="range"] {
        ${generateBackground()};
      }
    `}
  </style>
  <datalist className="flex justify-between w-[500px]">
    <option value={0}>0%</option>
    <option value={25}>25%</option>
    <option value={50}>50%</option>
    <option value={75}>75%</option>
    <option value={100}>100%</option>
    <option value={100}>100%</option>
    <option value={100}>100%</option>
  </datalist>
</div>

  );
}

export default Drag;
