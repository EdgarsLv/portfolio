import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressLine from "./ProgressLine";
import { Fade } from "react-awesome-reveal";
import Tooltip from "../UI/Tooltip";

const Skills = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="skills-tab">
      <Tooltip show={show} />
      <div data-aos="zoom-in" className="skills">
        <Fade cascade damping={0.1}>
          <p>Html</p>
          <ProgressLine width="45%" />
          <p>Css</p>
          <ProgressLine width="55%" />
          <p>React</p>
          <ProgressLine width="35%" />
          <p>C++</p>
          <ProgressLine width="45%" />
          <p>C#</p>
          <ProgressLine width="35%" />
        </Fade>

        <div className="btn-about">
          <Link to="/contacts">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
