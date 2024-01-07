import React, { useState } from 'react';
import classes from './DropDown.module.css';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.container}>
      <select className={classes.select} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
      <option value="">NEWS & EVENTS</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
