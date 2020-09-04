import React from "react";
// import Svg from "../../assets/Svg";
import { Link } from "react-router-dom";
import "./Header.css";
import TextTypo from "./TextTypo";
import { motion } from "framer-motion";
import Swap from "./Swap";
import { Slide } from "react-awesome-reveal";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="bg-logo">
        <Logo height="65px" />
      </div>
      <div className="home-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="overlay"
        ></motion.div>

        <div className="my-bg"></div>
      </div>

      <div className="bg-image">
        <Swap />
      </div>

      <div className="title">
        <Slide>
          <h1 className="text" style={{ fontFamily: "sans-serif" }}>
            <strong>Edgars</strong> Pucens
          </h1>
        </Slide>
        <TextTypo />
        <div className="btn-home">
          <Link to="/portfolio">portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
