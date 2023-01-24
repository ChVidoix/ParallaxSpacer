import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./Intro.module.css";
import React from "react";

const Intro = () => {
  return (
    <>
      <ParallaxLayer speed={0.1}>
        <img
          className={styles.StarsImage}
          src={require("../../assets/stars.jpg")}
          alt={"stars"}
          loading={"lazy"}
        />
      </ParallaxLayer>

      <ParallaxLayer className={styles.IntroSection} speed={5} offset={0.3}>
        <h1 className={styles.MainHeader}>Spacer</h1>
        <p className={styles.IntroPara}>
          Take a walk through the most important parts of our universe
        </p>
      </ParallaxLayer>
    </>
  );
};

export default Intro;
