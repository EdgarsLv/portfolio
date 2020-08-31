import React from "react";
import GalleryItem from "./GalleryItem";
import Title from "../../components/Title/Title";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
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
    </div>
  );
};

export default Portfolio;
