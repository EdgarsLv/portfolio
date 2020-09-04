import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/Navigation";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Social from "../../Social/Social";
import DarkMode from "../../../hoc/darkMode/DarkMode";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
          <DarkMode />
        </div>
        <nav>
          <Navigation clicked={props.closed} />
        </nav>
        <div className={styles.Social}>
          <Social />
        </div>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
