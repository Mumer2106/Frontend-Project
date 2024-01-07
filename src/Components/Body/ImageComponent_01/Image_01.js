import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_01.module.css';
import frst_image from './one.jpeg';
import scnd_image from './two.jpeg';
import thrd_image from './three.jpeg';
import frth_image from './four.jpeg';

function Image_01() {
  return (
    <div className={classes.main_container}>
      <ul className={classes.ul_image}>
        <li className={classes.li_image}>
          <Link to="/">
            <img src={frst_image} alt="NASA" className={classes['frst-image01']} />
          </Link>
        </li>

        <li className={classes.li_image}>
          <Link to="/">
            <img src={scnd_image} alt="NASA" className={classes['scnd-image01']} />
          </Link>
        </li>

        <li className={classes.li_image}>

        <ul className={classes.ul_image01}>
        <li className={classes.li_image01}>
          <Link to="/">
            <img src={thrd_image} alt="NASA" className={classes['thrd-image01']} />
          </Link>
        </li>

        <li className={classes.li_image01}>
          <Link to="/">
            <img src={frth_image} alt="NASA" className={classes['frth-image01']} />
          </Link>
        </li>
      </ul>

        </li>
      </ul>
    </div>
  );
}

export default Image_01;
