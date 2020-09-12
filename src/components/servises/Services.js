import React from "react";
import Title from "../Title/Title";
import Work from "./Work";
import "./Services.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },
  visible: {
    // x: "0",
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    // x: "100vw",
    opacity: 0,
    transition: { duration: 0.7, ease: "linear" },
  },
};

const Services = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="services"
    >
      <Title title="Services" content="services" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="servs">
              <div className="row">
                <Work index="0" title="Web Development" />
                <Work index="1" title="Management" />
              </div>
              <div className="row">
                <Work index="2" title="Design" />
                <Work index="3" title="Support" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              // data-aos-delay="200"
              className="serv-video"
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
