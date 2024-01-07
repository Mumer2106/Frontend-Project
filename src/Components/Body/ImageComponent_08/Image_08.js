import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_08.module.css';

function Image_08() {
  return (
    <div className={classes.main_container}>
      <ul className={classes.ul_image}>
        <li className={classes.li_image01}>
          <Link to="/" className={classes.link01}></Link>
          <span className={classes.container}>
          {/* <p className={classes.p2}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
          </span>
        </li>

        <li className={classes.li_image01}>
          <Link to="/" className={classes.link02}></Link>
          <span className={classes.container}>
          {/* <p className={classes.p2}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
          </span>
        </li>

        <li className={classes.li_image02}>
          <Link to="/" className={classes.link03}></Link>
          <span className={classes.container}>
          {/* <p className={classes.p2}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
          </span>
        </li>

        <li className={classes.li_image02}>
          <Link to="/" className={classes.link04}></Link>
          <span className={classes.container}>
          {/* <p className={classes.p2}>Go farther with NASA-all the way to Jupiter's Ice</p> */}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Image_08;