import React from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./Intro.module.scss";
import faceBg from './images/face-bg.png'
import glasses from './images/glasses.png'
import mustache from './images/mustache.png'
import goatee from './images/goatee.png'
import faceOutline from './images/face-outline.png'
import hatOutline from './images/hat-outline.png'
import innerRing from './images/inner-ring.png'
import outerRing from './images/outer-ring.png'
import mainBg from './images/main-bg.png'
import shirtBg from './images/shirt-bg.png'
import hatBrim from './images/hat-brim.png'
import hatShade from './images/hat-shade.png'
import hatRing from './images/hat-ring.png'
import hatTop from './images/hat-top.png'


const Intro = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-75, 75]} scale={[-1, 3]} className={style.face}>
        <img src={faceBg} alt="faceBg" id="faceBg" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[50, -50]} className={style.faceItems}>
        <img src={glasses} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-1.8, 3.8]} translateY={[-65, 65]} className={style.faceItems}>
        <img src={mustache} alt="mustache" id="mustache" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scaleY={[-1, 3]} translateY={[50, -50]} className={style.faceItems}>
        <img src={goatee} alt="goatee" id="goatee" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-1.8, 3.8]} translateY={[140, -140]} className={style.faceOutline}>
        <img src={faceOutline} alt="face lines" id="faceLines" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[0, 2]} translateY={[220, -220]} className={style.hatOutline}>
        <img src={hatOutline} alt="hat lines" id="hatLines" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[0, 0]} className={style.rings}>
        <img src={innerRing} alt="inner black ring" id="innerRing" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[90, -90]} scale={[-0.5, 2.5]} className={style.rings}>
        <img src={outerRing} alt="outer black ring" id="outerRing" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-15, 15]} className={style.mainBg}>
        <img src={mainBg} alt="white round background" id="mainBg" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[19, -19]} scale={[0, 2]} className={style.shirt}>
        <img src={shirtBg} alt="shirt" id="shirt" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[32, -32]} scale={[2, 0]} className={style.hat}>
        <img src={hatBrim} alt="hat brim" id="hatBrim" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-38, 38]} scale={[-1, 3]} className={style.hat}>
        <img src={hatShade} alt="hat shade" id="hadShade" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[-15, 15]} scale={[2, 0]} className={style.hat}>
        <img src={hatRing} alt="hat ring" id="hatRing" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[350, -350]} scale={[2, 0]} className={style.hat}>
        <img src={hatTop} alt="hat top" id="hatTop" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[0, -100]} scale={[-0.0025, -3.8]} className={style.gradient}>
        <div className={style.outerCircle}></div>
      </Parallax>
    </div>
    <p className={style.scroll}>¿goingdown?</p>
  </div>
);

export default Intro;
