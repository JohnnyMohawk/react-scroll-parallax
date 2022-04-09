import React from "react";
import * as style from "./TriangleGrid.module.scss";
import { Svg } from "..";
import { Parallax } from "react-scroll-parallax";
import gridPurple from "bundle-text:./grid-purple.svg";
import gridWhite from "bundle-text:./grid-white.svg";
import angleTop from "bundle-text:../shared/angle-dark-top.svg";

import saveGood from './images/save-good.png'
import saveGoodFlip from './images/save-good-flip.png'


const TriangleGrid = () => (
  <main className={style.root}>
    <Svg svg={angleTop} className={style.angleTop} />
    <article className={style.copy}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className={style.headline}>John Nelson-Alden</h1>
      <div className={style.barTop} />
      <h3 className={style.headline}>self-portrait in code, 2022</h3>
      <p>
        HTML, CSS, React, React Scroll Parallax, Procreate.
      </p>
      <p>
        I am an artist and software engineer from Chicago, Illinois, USA. My art looks at dark or heavy subjects with bright colors and a light heart.
      </p>
      <p>
        This piece is an exploration of front-end developer tools as visual art media. It is also an exercise in shameless self-promotion. To see more of my work, click the button below. 
      </p>
      {/* <p>
        React hooks and components to create parallax scroll effects for
        banners, images or any other DOM elements.
      </p>
      <p>
        Utilizes{" "}
        <a href="https://parallax-controller.damnthat.tv/">
          Parallax Controller
        </a>{" "}
        to add vertical or horizontal scrolling based effects to elements.{" "}
      </p>
      <p>
        <a href="https://parallax-controller.damnthat.tv/docs/performance">
          Optimized
        </a>{" "}
        to reduce jank on scroll and works with SSR and SSG rendered React apps.
      </p>
      <p>
        <code>yarn add react-scroll-parallax</code>
        <code>npm i react-scroll-parallax</code>
      </p> */}
      <p>
        <a className="btn" href="https://www.johnnelsonalden.com/">
          Portfolio
        </a>
      </p>
    </article>
    <div className={style.container}>
      <Parallax translateY={[-25, 25]}>
        {/* <Svg svg={gridPurple} className={style.trianglesPurple} /> */}
        <img src={saveGoodFlip} alt="faceBg" id="faceBg" style={{width: 275, marginTop: 0, marginBottom: 0, marginLeft: 0, opacity: 0.7}} />
      </Parallax>
      <Parallax translateX={[-13, 13]} translateY={[-130, 50]}>
        {/* <Svg svg={gridWhite} /> */}
        <img src={saveGood} alt="faceBg" id="faceBg" style={{width: 275, marginTop: -1700, marginBottom: 0, marginLeft: 20, opacity: 0.7}} />
      </Parallax>
    </div>
  </main>
);

export default TriangleGrid;
