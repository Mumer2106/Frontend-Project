import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_07.module.css';

function Image_07() {
  return (
    <div>
      <div className={classes.div_container}>
      <span className={classes.container}>
        <h1 className={classes.h1}>Explore the Universe from your Inbox</h1>
        <p className={classes.p}>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</p>
        <p className={classes.p}>We’ll never share your email address.</p>
        <ul className={classes.ul}>
            <li className={classes.li}>
            <button className={classes.button}>SIGNUP</button>
            </li>
        </ul>
      </span>
    </div>
    </div>
  );
}

export default Image_07;
