import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_03.module.css';

function Image_03() {
  return (
    <div>
      <div className={classes.div_container}>
      <span className={classes.container}>
        <h1 className={classes.h1}>Experience the Launch of PACE</h1>
        <p className={classes.p}>Digital content creators are invited to register to attend the launch of NASA’s Plankton, Aerosol, Cloud Ocean Ecosystem (PACE) mission and create content based on the experience.</p>
        <ul className={classes.ul}>
            <li className={classes.li}>
            <button className={classes.button}>REGISTER</button>
            </li>
            <li className={classes.li}>
                <Link className={classes.link}>
                Details
                </Link>
            </li>
        </ul>
      </span>
    </div>
    </div>
  );
}

export default Image_03;
