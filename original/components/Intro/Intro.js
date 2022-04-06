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


const Intro = () => (
  <div className={style.root}>
    <div className={style.container}>
      <Parallax translateY={[-75, 75]} scale={[-1, 3]} className={style.face}>
        <img src={faceBg} alt="faceBg" id="faceBg" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax translateY={[50, -50]} className={style.glasses}>
        <img src={glasses} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-3, 5]} translateY={[-45, 45]} className={style.glasses}>
        <img src={mustache} alt="mustache" id="mustache" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scaleY={[-1, 3]} translateY={[50, -50]} className={style.glasses}>
        <img src={goatee} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-5, 7]} translateY={[140, -140]} className={style.glasses}>
        <img src={faceOutline} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Parallax scale={[-20, 22]} translateY={[160, -160]} className={style.glasses}>
        <img src={hatOutline} alt="glasses" id="glasses" style={{maxWidth: 300}} />
      </Parallax>
      <Svg className={style.hemispheres} svg={hemispheres} />
    </div>
    <p className={style.scroll}>¿goingdown?</p>
  </div>
);

export default Intro;
