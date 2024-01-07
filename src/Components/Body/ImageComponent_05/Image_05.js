import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_05.module.css';

function Image_05() {
  return (
    <div className={classes.main_container}>
      <ul className={classes.ul_image}>
        <li className={classes.li_image01}>
          <Link to="/" className={classes.link01}></Link>
          {/* <p className={classes.p1}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
        </li>

        <li className={classes.li_image02}>
          <Link to="/" className={classes.link02}></Link>
          {/* <p className={classes.p2}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
        </li>
      </ul>
    </div>
  )
}

export default Image_05;