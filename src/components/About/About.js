import React from "react";
import "./About.css";
import Title from "../Title/Title";

import { motion } from "framer-motion";
import Tab from "../Tabs/Tab";

const containerVariants = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },
  visible: {
    // x: "0",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    transition: { duration: 0.7, ease: "linear" },
  },
};

const About = () => {
  // let { url } = useRouteMatch();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about"
    >
      <Title title="About" content="About" />

      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-6">
            <div
              data-aos="zoom-in"
              // data-aos-delay="200"
              data-aos-duration="700"
              className="about-img"
            ></div>
          </div>
          <div
            data-aos="zoom-in"
            // data-aos-delay="200"
            data-aos-duration="700"
            className="col-md-12 col-lg-6"
          >
            <div className="tabs-about">
              <Tab />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
