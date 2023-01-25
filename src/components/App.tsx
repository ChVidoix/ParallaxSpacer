import React, { Ref, useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import { IParallax, Parallax } from "@react-spring/parallax";

const BottomBlur = React.lazy(() => import("./blurs/BottomBlur"));
const Moon = React.lazy(() => import("./moon/Moon"));
const Mars = React.lazy(() => import("./mars/Mars"));
const Intro = React.lazy(() => import("./intro/IntroSection"));
const Header = React.lazy(() => import("./header/Header"));
const Sun = React.lazy(() => import("./sun/Sun"));

function App() {
  const [active, setActive] = useState("Intro");

  const ref = useRef({
    scrollTo: (offset: number) => {},
    current: 0,
  });

  const handleScroll = (offset: number) => {
    ref.current.scrollTo(offset);
  };

  useEffect(() => {
    document
      .querySelector(".MainParallaxWrapper")!
      .addEventListener("scroll", () => {
        if (ref.current.current < 100) {
          setActive("Intro");
        } else if (ref.current.current >= 100 && ref.current.current < 700) {
          setActive("Moon");
        } else if (ref.current.current >= 700 && ref.current.current < 1700) {
          setActive("Mars");
        } else {
          setActive("Sun");
        }
      });
  }, []);

  return (
    <div className={styles.App}>
      <Header handleScroll={handleScroll} active={active} />
      <Parallax
        className="MainParallaxWrapper"
        pages={3.6}
        ref={ref as Ref<IParallax>}
      >
        <Intro />
        <Moon />
        <Mars />
        <Sun />
      </Parallax>
      <BottomBlur />
    </div>
  );
}

export default App;
