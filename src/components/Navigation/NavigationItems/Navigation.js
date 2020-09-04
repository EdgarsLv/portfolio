import React from "react";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavItem";
import { Zoom } from "react-awesome-reveal";
import {
  BsHouseDoor,
  BsGear,
  BsPeople,
  BsPerson,
  BsTerminal,
  BsPen,
} from "react-icons/bs";

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <Zoom direction="right" cascade damping={0.2}>
      <NavigationItem clicked={props.clicked} link="/" exact>
        <i>
          <BsHouseDoor />
        </i>
        Home
      </NavigationItem>

      <NavigationItem clicked={props.clicked} link="/about">
        <i>
          <BsPerson />
        </i>
        About
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/services">
        <i>
          <BsGear />
        </i>
        Services
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/portfolio">
        <i>
          <BsTerminal />
        </i>
        Portfolio
      </NavigationItem>
      <NavigationItem
        style={{ pointerEvents: "none", color: "gray" }}
        clicked={props.clicked}
        link="/testimonials"
      >
        <i>
          <BsPeople />
        </i>
        Testimonials
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/contacts">
        <i>
          <BsPen />
        </i>
        Contacts
      </NavigationItem>
    </Zoom>
  </ul>
);

export default navigationItems;
