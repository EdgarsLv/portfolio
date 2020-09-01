import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import {
  BsFillPersonLinesFill,
  BsFillStarFill,
  BsAwardFill,
} from "react-icons/bs";
import "./About.css";
import Title from "../Title/Title";
import AboutMe from "./AboutMe";
import Profile from "./Profile";
import Skills from "./Skills";

class About extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div className="about">
        <Title title="About" content="About" />

        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-6">
              <div
                data-aos="zoom-in"
                data-aos-duration="700"
                className="about-img"
              ></div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="tabs-about">
                <ul className="nav-about">
                  <li>
                    <NavLink
                      to={`${path}`}
                      exact
                      activeStyle={{
                        color: "var(--accent-clr)",
                        borderTop: "2px solid var(--accent-clr)",
                      }}
                    >
                      <i>
                        <BsFillPersonLinesFill />
                      </i>
                      About me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${path}/profile`}
                      activeStyle={{
                        color: "var(--accent-clr)",
                        borderTop: "2px solid var(--accent-clr)",
                      }}
                    >
                      <i>
                        <BsFillStarFill />
                      </i>
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${path}/skills`}
                      activeStyle={{
                        color: "var(--accent-clr)",
                        borderTop: "2px solid var(--accent-clr)",
                      }}
                    >
                      <i>
                        <BsAwardFill />
                      </i>
                      Skills
                    </NavLink>
                  </li>
                </ul>
                <div className="about-content">
                  <Switch>
                    <Route path={`${path}`} exact component={AboutMe} />
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/skills`} component={Skills} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
