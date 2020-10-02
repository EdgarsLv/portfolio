import React, { Fragment } from "react";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineUsb } from "react-icons/ai";
import "./Social.css";
// import ReactGa from "react-ga";

const Social = () => {
  // const clickHandler = () => {
  //   ReactGa.event({
  //     category: "Button",
  //     action: "Clicked GIT link",
  //   });
  // };
  return (
    <Fragment>
      {/* <a
        onClick={clickHandler}
        href="https://github.com/EdgarsLv/portfolio"
        target="blank"
      > */}
      <i>
        <AiFillGithub />
      </i>
      {/* </a> */}
      <i>
        <AiOutlineLinkedin />
      </i>
      <i>
        <AiOutlineUsb />
      </i>
    </Fragment>
  );
};

export default Social;
