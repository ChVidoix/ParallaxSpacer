import React, { useEffect, useMemo, useState } from "react";
import styles from "./Header.module.css";
import TopBlur from "../blurs/TopBlur";

interface HeaderProps {
  handleScroll: (offset: number) => void;
  active: string;
}

const Header = ({ handleScroll, active }: HeaderProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const menuButtonStyles = useMemo(
    () => ({
      display: width <= 700 ? "block" : "none",
      alignSelf: "center",
      color: "white",
    }),
    [width]
  );

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (width > 700) {
      setIsMenuOpened(false);
    }
  }, [width]);

  const handleMenuClick = (offset: number) => {
    handleScroll(offset);
    setIsMenuOpened(false);
  };

  const getMenuStyles = () => {
    return width <= 700 ? styles.VerticalNavBar : styles.NavBar;
  };

  const getMenuItemStyle = (item: string) => {
    const styles: React.CSSProperties = {
      display: isMenuOpened || width > 700 ? "block" : "none",
    };
    if (item === active) {
      styles.background = "#666";
    }
    return styles;
  };

  return (
    <>
      <header className={styles.Header}>
        <div
          role="button"
          className={styles.Logo}
          onClick={() => handleScroll(0)}
        >
          Spacer
        </div>
        <nav className={getMenuStyles()}>
          <span
            role="button"
            style={getMenuItemStyle("Moon")}
            onClick={() => handleMenuClick(0.25)}
          >
            Moon
          </span>
          <span
            role="button"
            style={getMenuItemStyle("Mars")}
            onClick={() => handleMenuClick(1.5)}
          >
            Mars
          </span>
          <span
            role="button"
            style={getMenuItemStyle("Sun")}
            onClick={() => handleMenuClick(2.6)}
          >
            Sun
          </span>
          {isMenuOpened ? (
            <div
              className="fa fa-xmark fa-2x"
              style={menuButtonStyles}
              onClick={toggleMenu}
            />
          ) : (
            <div
              className="fa fa-bars fa-2x"
              style={menuButtonStyles}
              onClick={toggleMenu}
            />
          )}
        </nav>
      </header>
      {!isMenuOpened && <TopBlur />}
    </>
  );
};

export default Header;
