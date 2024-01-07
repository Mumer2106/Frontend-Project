import React from 'react';
import { Link } from 'react-router-dom';
import image from './Image/one.png';
import classes from './Header.module.css';
import InputField from './InputField/InputField';
import Dropdown from './Dropdown_001/DropDown';
import Dropdown_001 from './Dropdown_001/DropDown_001';
import Button from './Button/Button';

function Header() {
  return (
    <header className={classes.header}>
      <span className={classes.text}>
        <Link to="text">
          <p className={classes.text001}>EXPLORE</p>
        </Link>
      </span>

      <span className={classes.InputField}>
        <InputField />
      </span>

      <span className={classes.image}>
        <Link to="/">
          <img src={image} alt="NASA" className={classes['main-image']} />
        </Link>
      </span>

      <span className={classes.Dropdown}>
        <Dropdown />
      </span>

      <span className={classes.Dropdown}>
        <Dropdown_001></Dropdown_001>
      </span>

      <span className={classes.button}>
        <Button></Button>
      </span>
    </header>
  );
}

export default Header;
