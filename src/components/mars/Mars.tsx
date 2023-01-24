import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import appStyles from "../App.module.css";
import marsStyles from "./Mars.module.css";

const Mars = () => {
  return (
    <>
      <ParallaxLayer offset={1.7} speed={0.1}>
        <img
          className={marsStyles.MarsImage}
          src={require("../../assets/mars.png")}
          alt={"mars"}
          loading={"lazy"}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.5}>
        <div className={marsStyles.MarsBlack}>
          <h5 className={appStyles.SmallHeader}>Now let's go to the Mars...</h5>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.1}>
        <div className={appStyles.Black}>
          <p className={marsStyles.MarsPara}>
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System, only being larger than Mercury. In the
            English language, Mars is named for the Roman god of war. Mars is a
            terrestrial planet with a thin atmosphere (less than 1% that of
            Earth's), and has a crust primarily composed of elements similar to
            Earth's crust.
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Mars;
