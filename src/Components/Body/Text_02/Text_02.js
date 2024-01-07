import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Text_02.module.css';

const Text_02 = () => {
  return (
    <div className={classes.text_01}>
        <span>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <h1 className={classes.h1}>Latest News</h1>
                </li>
                <li className={classes.li}>
                    <Link className={classes.p}>
                    More NASA News Releases
                    </Link>
                </li>
            </ul>
        </span>
    </div>
  );
};

export default Text_02;
