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

import faceBg from './images/face-bg.png'
import glasses from './images/glasses.png'
import mustacheMag from './images/mustache-mag.png'

export default class ShapeField extends Component {
  render() {
    return (
      <div className={style.root}>
        <div className={style.shapeCluster01}>
          <Parallax
            translateY={[100, -100]}
            className={style.hemiLeft}
            slowerScrollRate
          >
            <img src={question} alt="question" style={{maxWidth: 300}} />
          </Parallax>
          <div className={style.earth}>
            <Lottie
              loop
              animationData={earth}
              play
              style={{ width: 300, height: 300 }}
            />
          </div>
          <Parallax translateY={[-100, 100]} className={style.hemiRight}>
            <img src={pregrunta} alt="pregrunta" style={{maxWidth: 300}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster02}>
          <img src={faceBg} alt="face" style={{width: 150, marginLeft: 60}} />
          <Parallax translateY={[-380, 30]} className={style.triangleBig}>
            <img src={glasses} alt="glasses" style={{width: 150, marginLeft: 64}} />
          </Parallax>
          <Parallax translateY={[4000, -500]} style={{width: 150, marginLeft: 60}} className={style.triangleSmall}>
            <img src={mustacheMag} alt="magenta mustache" style={{width: 110, marginLeft: 17}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster03}>
          <Parallax translateY={[60, -20]} className={style.triangleTop}>
            <Svg svg={cluster03TriangleTop} />
          </Parallax>

          <Svg svg={cluster03TriangleBottom} className={style.triangleTop} />
          <Parallax translateY={[-60, 60]} className={style.triangleBig}>
            <Svg svg={cluster03TriangleBig} />
          </Parallax>
        </div>

        <div className={style.shapeCluster04}>
          <Svg svg={cluster04Square} className={style.square} />
          <Parallax translateY={[-60, 60]} className={style.triangle}>
            <Svg svg={cluster04Triangle} />
          </Parallax>
          <Parallax translateY={[-30, 30]} className={style.hemiRight}>
            <Svg svg={cluster04HemiRight} />
          </Parallax>
        </div>
      </div>
    );
  }
}
