import React from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./Intro.module.scss";
import { png } from "../";
import { Svg } from "../";
import ring from "bundle-text:./ring-of-dots.svg";
import hemispheres from "bundle-text:./hemispheres.svg";

import faceBg from './face-bg.png'
import glasses from './glasses.png'
import mustache from './mustache.png'
import goatee from './goatee.png'
import faceOutline from './face-outline.png'
import hatOutline from './hat-outline.png'
import innerRing from './inner-ring.png'
import outerRing from './outer-ring.png'
import mainBg from './main-bg.png'
import shirtBg from './shirt-bg.png'
import hatBrim from './hat-brim.png'
import hatShade from './hat-shade.png'
import hatRing from './hat-ring.png'
import hatTop from './hat-top.png'
// import psych from './psychedelic.mp4'


const Intro = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-75, 75]} scale={[-1, 3]} className={style.face}>
        <img src={faceBg} alt="faceBg" id="faceBg" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[50, -50]} className={style.glasses}>
        <img src={glasses} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-1.8, 3.8]} translateY={[-65, 65]} className={style.glasses}>
        <img src={mustache} alt="mustache" id="mustache" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scaleY={[-1, 3]} translateY={[50, -50]} className={style.glasses}>
        <img src={goatee} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-1.8, 3.8]} translateY={[140, -140]} className={style.faceOutline}>
        <img src={faceOutline} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[0, 2]} translateY={[220, -220]} className={style.glasses}>
        <img src={hatOutline} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[0, 0]} className={style.innerRing}>
        <img src={innerRing} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[90, -90]} scale={[-0.5, 2.5]} className={style.innerRing}>
        <img src={outerRing} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-15, 15]} className={style.mainBg}>
        <img src={mainBg} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[19, -19]} scale={[0, 2]} className={style.mainBg}>
        <img src={shirtBg} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[32, -32]} scale={[2, 0]} className={style.hatBrim}>
        <img src={hatBrim} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-38, 38]} scale={[-1, 3]} className={style.hatBrim}>
        <img src={hatShade} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-15, 15]} scale={[2, 0]} className={style.hatBrim}>
        <img src={hatRing} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[350, -350]} scale={[2, 0]} className={style.hatBrim}>
        <img src={hatTop} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      {/* <Parallax translateY={[0, -100]} scale={[-0.5, -2]} className={style.gradient}> */}
      <Parallax translateY={[0, -100]} scale={[-0.0025, -3.8]} className={style.gradient}>
        <div className={style.outerCircle}></div>
      </Parallax>

      {/* <Svg className={style.hemispheres} svg={hemispheres} /> */}
    </div>
    <p className={style.scroll}>¿goingdown?</p>
  </div>
);

export default Intro;
