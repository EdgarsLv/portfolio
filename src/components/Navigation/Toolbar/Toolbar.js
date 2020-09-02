import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/Navigation";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Social from "../../Social/Social";
import DarkMode from "../../../hoc/darkMode/DarkMode";

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo height="65px" />
        <DarkMode />
      </div>
      <nav className={styles.DekstopOnly}>
        <Navigation />
      </nav>

      <div className={styles.Social}>
        <Social />
      </div>
    </header>
  );
};

export default toolbar;
