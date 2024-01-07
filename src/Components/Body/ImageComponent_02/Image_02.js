import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Image_02.module.css';
import frst_image from './one.webp';
import scnd_image from './two.webp';
import thrd_image from './three.webp';
import frth_image from './four.webp';

function Image_02() {
  return (
    <div className={classes.main_container}>
      <ul className={classes.ul_image}>
        <li className={classes.li_image}>
          <Link to="/">
            <img src={frst_image} alt="NASA" className={classes['frst-image01']} />
            <p className={classes.p}>NASA's NEOWISE, Celebrates 10 Years, Plans End Of Mission</p>
          </Link>
        </li>

        <li className={classes.li_image}>
          <Link to="/">
            <img src={scnd_image} alt="NASA" className={classes['scnd-image01']} />
            <p className={classes.p}>NASA's Space Station Laser Comm Terminal Acheives First Link</p>
          </Link>
        </li>

        <li className={classes.li_image}>
          <Link to="/">
            <img src={thrd_image} alt="NASA" className={classes['thrd-image01']} />
            <p className={classes.p}>NASA's Web Identifies Tiniest Free Floatig Brown Dwarf.Join Us</p>
          </Link>
        </li>

        <li className={classes.li_image01}>
          <Link to="/">
            <img src={frth_image} alt="NASA" className={classes['frth-image01']} />
            <p className={classes.p}>NASA: Hello!!! Some Icy Exoplanets May Have Habitable Oceans Geysers</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Image_02;
