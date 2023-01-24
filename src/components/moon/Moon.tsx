import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import moonStyles from "./Moon.module.css";

const Moon = () => {
  return (
    <ParallaxLayer offset={0.8} speed={1.5}>
      <div className={moonStyles.MoonSectionWrapper}>
        <p className={moonStyles.MoonPara}>
          The Moon is Earth's only natural satellite. It is the fifth largest
          satellite in the Solar System and the largest and most massive
          relative to its parent planet, with a diameter about one-quarter that
          of Earth (comparable to the width of Australia). The Moon is a
          planetary-mass object with a differentiated rocky body, making it a
          satellite planet under the geophysical definitions of the term.
        </p>
        <img
          className={moonStyles.MoonImage}
          src={require("../../assets/moon.png")}
          alt={"moon"}
          loading={"lazy"}
        />
      </div>
    </ParallaxLayer>
  );
};

export default Moon;
