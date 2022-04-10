import React from "react";
import * as style from "./Marquee.module.scss";
import { Svg } from "../";
import { Parallax } from "react-scroll-parallax";
import divider from "bundle-text:../shared/divider.svg";
import divider1 from "bundle-text:../shared/divider1.svg";
import divider2 from "bundle-text:../shared/divider2.svg";
import outerRing from './images/outer-ring.png'
import outerWhtRing from './images/Outer-white-ring.png'
import innerRing from './images/inner-ring.png'
import innerWhtRing from './images/Inner-white-ring.png'

const Marquee = () => (
  <div className={style.root}>
    <Svg svg={divider} className={style.divider} />
    <Parallax className={style.dividerParallax} translateY={[-65, -32]}>
      <Svg svg={divider1} className={style.divider} />
    </Parallax>
    <Parallax className={style.dividerParallax} translateY={[-65.12, -45]}>
      <Svg svg={divider2} className={style.divider} />
    </Parallax>
    <div className={style.container}>
      <img src={outerWhtRing} alt="outer white ring" id="outerWhtRing" style={{width: 420, marginTop: -49, marginLeft: 30, opacity: 0.7}} />
      <Parallax
        className={style.text}
        translateY={[-70, 70]}
        translateX={[30, -30]}
      >
        <span className="h1">¿WHATAREYOULEFTWITH?</span>
      </Parallax>
      <Parallax className={style.bullseyeRing} translateY={[75, -35]}>
        <img src={outerRing} alt="faceBg" id="faceBg" style={{width: 500, marginTop: -290, marginLeft: 25, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.bullseyeRing} translateY={[195, -155]}>
        <img src={innerRing} alt="faceBg" id="boxBg" style={{width: 335, marginTop: -500, marginLeft: 107, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.bullseyeRing} translateY={[95, -20]}>
        <img src={innerWhtRing} alt="faceBg" id="boxBg" style={{width: 248, marginTop: -234, marginLeft: 150, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.gradient} translateY={[81, -20]}>
        <div className={style.outerCircle}style={{width: 166, marginTop: -300, marginLeft: 158}}></div>
      </Parallax>
    </div>
  </div>
);

export default Marquee;
