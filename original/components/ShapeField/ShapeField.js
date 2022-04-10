import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import * as style from "./ShapeField.module.scss";

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
            <img src={glassesPink} alt="pink glasses" style={{width: 169, marginLeft: -128}} />
          </Parallax>
            <img src={faceLine} alt="face lines" style={{width: 300, marginLeft: -125, marginTop: 20}} />
          <Parallax translateY={[-100, -60]} className={style.hemiRight}>
            <img src={mustache} alt="mustache" style={{width: 120, marginLeft: 74, marginTop: 90}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster02}>
          <img src={faceBg} alt="face color" style={{width: 150, marginLeft: 60}} />
          <Parallax translateY={[-390, 30]} className={style.triangleBig}>
            <img src={glasses} alt="glasses" style={{width: 151, marginLeft: 63}} />
          </Parallax>
          <Parallax translateY={[4800, -640]} style={{width: 150, marginLeft: 60}} className={style.triangleSmall}>
            <img src={mustacheMag} alt="pink mustache" style={{width: 110, marginLeft: 17}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster03}>
          <Parallax translateY={[-170, -20]} className={style.triangleTop}>
            <img src={glasses} alt="glasses" style={{width: 143, marginLeft: 108, zIndex: 5}} />
          </Parallax>
          <img src={mustache} alt="mustache" style={{width: 110, marginLeft: 125, marginTop: 70}} />
          <Parallax translateY={[-110, 60]} className={style.triangleBig}>
            <img src={hatLinePink} alt="pink hat" style={{width: 300, marginLeft: 30}} />
          </Parallax>
        </div>

        <div className={style.shapeCluster04}>
          <img src={hatLine} alt="hat lines" style={{width: 270, marginLeft: -45, marginTop: 81}} />
          <Parallax translateY={[-60, 60]} className={style.triangle}>
            <img src={facePink} alt="pink face" style={{width: 140, marginLeft: 20, marginTop: 150}} />
          </Parallax>
          <Parallax translateY={[-300, 30]} className={style.hemiRight}>
            <img src={mustache} alt="mustache" style={{width: 100, marginLeft: -85, marginTop: 670}} />
          </Parallax>
        </div>

      </div>
    );
  }
}
