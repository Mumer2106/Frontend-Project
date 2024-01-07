import React from 'react';
import classes from './InputField.module.css';

const InputField = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        className={classes.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="SEARCH....."
      />
    </div>
  );
};

export default InputField
