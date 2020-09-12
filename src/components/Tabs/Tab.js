import React from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import "./Tab.css";
import Skills from "../About/Skills";
import Profile from "../About/Profile";
import AboutMe from "../About/AboutMe";
import {
  BsFillPersonLinesFill,
  BsFillStarFill,
  BsAwardFill,
} from "react-icons/bs";

const Tab = () => {
  return (
    <div>
      <Tabs
        activeLinkStyle={{
          color: "var(--accent-clr)",
          borderTop: "2px solid var(--accent-clr)",
        }}
      >
        <nav>
          <ul className="tab-ul">
            <li className="tab-li">
              <TabLink to="tab1">
                <i className="icon">
                  <BsFillPersonLinesFill />
                </i>
                About me
              </TabLink>
            </li>
            <li>
              <TabLink to="tab2">
                <i className="icon">
                  <BsFillStarFill />
                </i>
                Profile
              </TabLink>
            </li>
            <li>
              <TabLink to="tab3">
                <i className="icon">
                  <BsAwardFill />
                </i>
                Skills
              </TabLink>
            </li>
          </ul>
        </nav>
        <div>
          <TabContent for="tab1">
            <AboutMe />
          </TabContent>
          <TabContent for="tab2">
            <Profile />
          </TabContent>
          <TabContent for="tab3">
            <Skills />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Tab;
