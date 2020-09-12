import React from "react";
import GalleryItem from "./GalleryItem";
import Title from "../../components/Title/Title";
import "./Portfolio.css";
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

const Portfolio = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="portfolio"
    >
      <Title title="Portfolio" content="portfolio" />
      <div className="container">
        <div className="shuffle">
          <ul>
            <li>All</li>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div className="gallery">
          <div className="row">
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
