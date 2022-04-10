import React from "react";
import * as style from "./Overlap.module.scss";
import { Parallax } from "react-scroll-parallax";
import blackLayer from './images/all-black-single.png'
import blackBg from './images/black-round.png'
import whiteRnd from './images/white-round.png'




const Overlap = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-45, 40]} translateX={[-40, 20]} className={style.circleRings}>
        <img src={whiteRnd} style={{maxWidth: 330}} />
      </Parallax>
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
        <div className={style.outerCircle}></div>
      </Parallax>
      <Parallax
        translateY={[-45, 40]}
        translateX={[40, -20]}
        className={style.circleRings}
      >
        <img src={blackLayer} style={{maxWidth: 330}} />
      </Parallax>
    </div>
  </div>
);

export default Overlap;
