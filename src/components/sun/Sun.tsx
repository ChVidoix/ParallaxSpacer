import sunStyles from "./Sun.module.css";
import appStyles from "../App.module.css";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const Sun = () => {
  return (
    <>
      <ParallaxLayer offset={2.4} speed={0.1}>
        <img
          className={sunStyles.StarsImage}
          src={require("../../assets/stars_2.jpg")}
          alt="stars"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.1} speed={1.2}>
        <div className={appStyles.Black}>
          <h5 className={appStyles.SmallHeader}>Here comes the Sun!</h5>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.9} speed={0.5}>
        <div className={sunStyles.SunSectionWrapper}>
          <img
            className={sunStyles.SunImage}
            src={require("../../assets/sun.png")}
            alt={"sun"}
            loading={"lazy"}
          />
          <p className={appStyles.Para}>
            The Sun is the star at the center of the Solar System. It is a
            nearly perfect ball of hot plasma, heated to incandescence by
            nuclear fusion reactions in its core. The Sun radiates this energy
            mainly as light and is the most important source of energy for life
            on Earth.
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Sun;
