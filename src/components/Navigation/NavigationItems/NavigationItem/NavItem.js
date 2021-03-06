import React from "react";
import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        onClick={props.clicked}
        to={props.link}
        exact={props.exact}
        activeClassName={styles.active}
        style={props.style}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavigationItem;
