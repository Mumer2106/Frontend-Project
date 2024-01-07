import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Text_01.module.css';

const Text_01 = () => {
  return (
    <div className={classes.text_01}>
        <span>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <h1 className={classes.h1}>Featured News</h1>
                </li>
                <li className={classes.li}>
                    <Link className={classes.p}>
                    More NASA News
                    </Link>
                </li>
            </ul>
        </span>
    </div>
  );
};

export default Text_01;
