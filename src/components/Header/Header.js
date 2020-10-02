import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TextTypo from "./TextTypo";
import { motion } from "framer-motion";
import Swap from "./Swap";
import { Slide } from "react-awesome-reveal";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "linear" },
  },
};

const Header = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="header"
    >
      <div className="bg-logo">
        <Logo height="45px" e="var(--primary-txt)" p="var(--accent-clr)" />
      </div>
      <div className="home-bg">
        <div className="overlay"></div>
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
      <div className="head-soc">
        <Social />
      </div>
    </motion.div>
  );
};

export default Header;
