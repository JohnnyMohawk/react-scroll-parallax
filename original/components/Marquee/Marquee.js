import React from "react";
import * as style from "./Marquee.module.scss";
import { Svg } from "../";
import { Parallax } from "react-scroll-parallax";
import boxBg from "bundle-text:./box-bg.svg";
import boxOutline from "bundle-text:./box-outline.svg";
import divider from "bundle-text:../shared/divider.svg";
import divider1 from "bundle-text:../shared/divider1.svg";
import divider2 from "bundle-text:../shared/divider2.svg";

import outerRing from './images/outer-ring.png'
import outerWhtRing from './images/Outer-white-ring.png'
import innerRing from './images/inner-ring.png'
import innerWhtRing from './images/Inner-white-ring.png'
import pinkDot from './images/Inner-dot-mag.png'

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
      {/* <Svg svg={boxBg} className={style.boxBg} /> */}
      <img src={outerWhtRing} alt="faceBg" id="faceBg" style={{width: 420, marginTop: -50, marginLeft: 30, opacity: 0.7}} />
      <Parallax
        className={style.text}
        translateY={[-70, 70]}
        translateX={[30, -30]}
      >
        <span className="h1">¿WHATAREYOULEFTWITH?</span>
      </Parallax>
      <Parallax className={style.boxOutline} translateY={[75, -35]}>
        {/* <Svg svg={boxOutline} /> */}
        <img src={outerRing} alt="faceBg" id="faceBg" style={{width: 500, marginTop: -290, marginLeft: 25, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.boxOutline} translateY={[195, -155]}>
        {/* <Svg svg={boxOutline} /> */}
        <img src={innerRing} alt="faceBg" id="boxBg" style={{width: 335, marginTop: -500, marginLeft: 107, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.boxOutline} translateY={[95, -20]}>
        {/* <Svg svg={boxOutline} /> */}
        <img src={innerWhtRing} alt="faceBg" id="boxBg" style={{width: 248, marginTop: -230, marginLeft: 150, opacity: 0.7}} />
      </Parallax>
      <Parallax className={style.gradient} translateY={[81, -20]}>
        {/* <Svg svg={boxOutline} /> */}
        {/* <img src={pinkDot} alt="faceBg" id="boxBg" style={{width: 168, marginTop: -500, marginLeft: 190}} /> */}
        <div className={style.outerCircle}style={{width: 167, marginTop: -294, marginLeft: 158}}></div>
      </Parallax>
    </div>
  </div>
);

export default Marquee;
