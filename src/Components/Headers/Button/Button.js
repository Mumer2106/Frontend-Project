import React from 'react';
import classes from './Button.module.css';

function Button() {
  return (
    <span className={classes.button}>
        <button className={classes.buttonStyle} onClick={() => console.log('Moye Moye')}>
          NASA+
        </button>
      </span>
  );
}

export default Button;
