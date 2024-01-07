import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TextImage.module.css';
import image from './one.webp';

const Text_Image= () => {
  return (
    <div className={classes.text_01}>
        <span>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <h1 className={classes.h1}>Image Of The Day</h1>
                    <h2 className={classes.h2}>120th Anniversary of the First Powered, Controlled Flight</h2>
                    <p className={classes.p}>
                    Orville Wright makes the first powered, controlled flight on Earth as his brother Wilbur looks on in this image taken at Kitty Hawk, North Carolina, on Dec. 17, 1903. Orville Wright covered 120 feet in 12 seconds during the first flight. The Wright brothers made four flights that day, each longer than the last.
                    </p>
                    <Link className={classes.link}>Browse Image Archeive</Link>
                </li>
                <Link className={classes.li}>
                <img src={image} alt="NASA" className={classes['image']} />
                </Link>
            </ul>
        </span>
    </div>
  );
};

export default Text_Image;
