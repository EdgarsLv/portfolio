import React from "react";
import first from "../../assets/images/html.jpg";
import s2nd from "../../assets/images/css.jpg";
import t3rd from "../../assets/images/js.jpg";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Swap = () => {
  return (
    <Carousel
      infinite
      slidesPerPage={1}
      slidesPerScroll={1}
      animationSpeed={1500}
      autoPlay={3000}
      offset={0}
      centered
    >
      <img className="carousel" src={first} alt="first" />

      <img className="carousel" src={s2nd} alt="second" />

      <img className="carousel" src={t3rd} alt="third" />
    </Carousel>
  );
};

export default Swap;
