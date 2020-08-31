import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div data-aos="zoom-in" className="about-me">
      <Fade cascade damping={0.3}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua labo ris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.{" "}
        </p>
        <p>
          Hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat.{" "}
        </p>
      </Fade>
      <img className="sig" src="#" alt="Pucens" />
    </div>
  );
};

export default AboutMe;
