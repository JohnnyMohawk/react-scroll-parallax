import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import Lottie from 'react-lottie-player'


import { Svg } from "../";

import * as style from "./ShapeField.module.scss";

import cluster01HemiLeft from "bundle-text:./cluster-01-hemi-left.svg";
import cluster01HemiRight from "bundle-text:./cluster-01-hemi-right.svg";
import cluster01Rect from "bundle-text:./cluster-01-rect.svg";

import cluster02Hemi from "bundle-text:./cluster-02-hemi.svg";
import cluster02TriangleBig from "bundle-text:./cluster-02-triangle-big.svg";
import cluster02TriangleSmall from "bundle-text:./cluster-02-triangle-small.svg";

import cluster03TriangleTop from "bundle-text:./cluster-03-triangle-top.svg";
import cluster03TriangleBottom from "bundle-text:./cluster-03-triangle-bottom.svg";
import cluster03TriangleBig from "bundle-text:./cluster-03-triangle-big.svg";

import cluster04Triangle from "bundle-text:./cluster-04-triangle.svg";
import cluster04Square from "bundle-text:./cluster-04-square.svg";
import cluster04HemiRight from "bundle-text:./cluster-04-hemi-right.svg";

import question from './images/question.png'
import pregrunta from './images/¿.png'
import earth from './images/magenta-earth.json'
import faceLine from './images/face-outline.png'
import mustache from './images/mustache.png'
import glassesPink from './images/glasses-mag.png'

import faceBg from './images/face-bg.png'
import glasses from './images/glasses.png'
import mustacheMag from './images/mustache-mag.png'

import hatLinePink from './images/hat-outline-mag.png'

import facePink from './images/face-bg-mag.png'
import hatLine from './images/hat-outline.png'

export default class ShapeField extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.shapeCluster01}>
          <Parallax
            translateY={[2920, -100]}
            className={style.hemiLeft}
            slowerScrollRate
          >
            <img src={glassesPink} alt="question" style={{width: 169, marginLeft: -128}} />
          </Parallax>
          {/* <div className={style.earth}>
            <Lottie
              loop
              animationData={earth}
              play
              style={{ width: 300, height: 300 }}
            />
          </div> */}
            <img src={faceLine} alt="face" style={{width: 300, marginLeft: -125, marginTop: 20}} />
          <Parallax translateY={[-100, -60]} className={style.hemiRight}>
            <img src={mustache} alt="mustache" style={{width: 120, marginLeft: 74, marginTop: 90}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster02}>
          <img src={faceBg} alt="face" style={{width: 150, marginLeft: 60}} />
          <Parallax translateY={[-390, 30]} className={style.triangleBig}>
            <img src={glasses} alt="glasses" style={{width: 151, marginLeft: 63}} />
          </Parallax>
          <Parallax translateY={[4800, -640]} style={{width: 150, marginLeft: 60}} className={style.triangleSmall}>
            <img src={mustacheMag} alt="magenta mustache" style={{width: 110, marginLeft: 17}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster03}>
          <Parallax translateY={[-170, -20]} className={style.triangleTop}>
            {/* <Svg svg={cluster03TiangleTop} /> */}
            <img src={glasses} alt="glasses" style={{width: 143, marginLeft: 108, zIndex: 5}} />
          </Parallax>
          <img src={mustache} alt="mustache" style={{width: 110, marginLeft: 125, marginTop: 70}} />
          {/* <Svg svg={cluster03TriangleBottom} className={style.triangleTop} style={{zIndex: 7}} /> */}
          <Parallax translateY={[-110, 60]} className={style.triangleBig}>
            {/* <Svg svg={cluster03TriangleBig} /> */}
            <img src={hatLinePink} alt="pink hat" style={{width: 300, marginLeft: 30}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster04}>
          {/* <Svg svg={cluster04Square} className={style.square} /> */}
          <img src={hatLine} alt="face" style={{width: 270, marginLeft: -45, marginTop: 81}} />
          <Parallax translateY={[-60, 60]} className={style.triangle}>
            {/* <Svg svg={cluster04Triangle} /> */}
            
            <img src={facePink} alt="face" style={{width: 140, marginLeft: 20, marginTop: 150}} />
          </Parallax>
          <Parallax translateY={[-300, 30]} className={style.hemiRight}>
            {/* <Svg svg={cluster04HemiRight} /> */}
            <img src={mustache} alt="mustache" style={{width: 100, marginLeft: -85, marginTop: 670}} />
          </Parallax>
        </div>
      </div>
    );
  }
}
