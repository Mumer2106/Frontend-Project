import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_04.module.css';

function Image_04() {
  return (
    <div>
      <div className={classes.div_container}>
      <span className={classes.container}>
        <h1 className={classes.h1}>Earth Information Center</h1>
        <p className={classes.p}>Discover Earth as NASA sees it. Learn why this information matters to us all.</p>
        <ul className={classes.ul}>
            <li className={classes.li}>
            <button className={classes.button}>DISCOVER</button>
            </li>
            <li className={classes.li}>
                <Link className={classes.link}>
                Explore
                </Link>
            </li>
        </ul>
      </span>
    </div>
    </div>
  );
}

export default Image_04;
