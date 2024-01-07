import React from 'react';
import classes from './Body.module.css';
import Text_01 from './Text_01/Text_01';
import Image_01 from './ImageComponent_01/Image_01';
import Image_02 from './ImageComponent_02/Image_02';
import Image_03 from './ImageComponent_03/Image_03';
import Text_Image from './Text_Image/TextImage';
import Image_04 from './ImageComponent_04/Image_04';
import Text_02 from './Text_02/Text_02';
import Image_05 from './ImageComponent_05/Image_05';
import Image_06 from './ImageComponent_06/Image_06';
import Image_07 from './ImageComponent_07/Image_07';
import Text_03 from './Text_03/Text_03';
import Image_08 from './ImageComponent_08/Image_08';

function Body() {
  return (
    <div>
      <div className={classes.div_container}>
      <span className={classes.container}>
        <h1 className={classes.h1}>Send Your Name to Jupiter's Moon Europa</h1>
        <p className={classes.p}>Go farther with NASA-all the way to Jupiter's Icy Moon Europa. Signup to send your name on NASA Europa Clipper Spacecraft by Sunday 31 December</p>
        <button className={classes.button}>SIGN UP</button>
      </span>
    </div>

    <div>
      <span className={classes.text_01}>
        <Text_01></Text_01>
      </span>
    </div>

    <div>
      <span>
        <Image_01></Image_01>
      </span>
    </div>

    <div>
      <span>
        <Image_02></Image_02>
      </span>
    </div>

    <div>
      <span>
        <Image_03></Image_03>
      </span>
    </div>

    <div>
      <span>
        <Text_Image></Text_Image>
      </span>
    </div>

    <div>
      <span>
        <Image_04></Image_04>
      </span>
    </div>

    <div>
      <span>
        <Text_02></Text_02>
      </span>
    </div>

    <div>
      <span>
        <Image_05></Image_05>
      </span>
    </div>

    <div>
      <span>
        <Image_06></Image_06>
      </span>
    </div>

    <div>
      <span>
        <Image_07></Image_07>
      </span>
    </div>

    <div>
      <span>
        <Text_03></Text_03>
      </span>
    </div>

    <div>
      <span>
        <Image_08></Image_08>
      </span>
    </div>
    </div>
  );
}

export default Body;
