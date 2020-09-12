import React from "react";
import {
  BsLayoutWtf,
  BsFileEarmarkRuled,
  BsImages,
  BsQuestionSquare,
} from "react-icons/bs";

const Work = (props) => {
  const pic = [
    <BsLayoutWtf />,
    <BsFileEarmarkRuled />,
    <BsImages />,
    <BsQuestionSquare />,
  ];

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      // data-aos-delay="200"
      className="col-lg-6"
    >
      <div className="content">
        <i className="web-dew">{pic[props.index]}</i>
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do
          tempor . Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed
          do tempor . Lorem ipsum dolor sit amet, con sectetur adipiscing elit,
          sed do tempor .
        </p>
      </div>
    </div>
  );
};

export default Work;
