import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div data-aos="zoom-in" className="about-me">
      <Fade cascade damping={0.3}>
        <p>
          I want to develop and improve my future professional growth in
          programming.
        </p>
        <p>
          Ability to quickly adapt to the current state of technology and
          constantly improve my skills and competencies.
        </p>
        <p>
          Ability to perform programmer tasks, find creative solutions and
          discuss practical issues within their competence.
        </p>
      </Fade>
      <img className="sig" src="#" alt="Pucens" />
    </div>
  );
};

export default AboutMe;
