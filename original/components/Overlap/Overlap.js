import React from "react";
import * as style from "./Overlap.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import circle from "bundle-text:./circle.svg";
import circleRings from "bundle-text:./circle-rings.svg";


import blackLayer from './images/all-black-single.png'
import blackBg from './images/black-round.png'
import whiteRnd from './images/white-round.png'




const Overlap = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-45, 40]} translateX={[-40, 20]} className={style.circleRings}>
        {/* <Svg svg={circle} /> */}
        <img src={whiteRnd} style={{maxWidth: 330}} />
      </Parallax>
      {/* <Parallax translateY={[-50, 50]} translateX={[-40, 20]} className={style.circleRings}>

        <img src={outerRing} style={{maxWidth: 330}} />
      </Parallax> */}
      <Parallax
        translateY={[-45, 40]}
        translateX={[40, -20]}
        className={style.circleRings}
        id={style.blackBg}
      >
        <img src={blackBg} style={{maxWidth: 330}} />
      </Parallax>


      <Parallax
        translateY={[-45, 40]}
        translateX={[40, -20]}
        scale={[-0.1, -1.8]}
        className={style.circleRingsColor}
      >
        {/* <Svg svg={circleRings} /> */}
        {/* <img src={blackLayer} style={{maxWidth: 330}} /> */}
        <div className={style.outerCircle}></div>
      </Parallax>


      <Parallax
        translateY={[-45, 40]}
        translateX={[40, -20]}
        className={style.circleRings}
      >
        {/* <Svg svg={circleRings} /> */}
        <img src={blackLayer} style={{maxWidth: 330}} />
      </Parallax>
    </div>
  </div>
);

export default Overlap;
